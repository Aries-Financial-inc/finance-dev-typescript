import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ClientCredentialsTokenProvider, CallbackTokenProvider, WebSocketAuthenticationError } from '../../esm/websocket/index.js';
import { FinanceDev } from '../../esm/index.js';
import { serve, config } from './helpers.mjs';

test('client credentials use form encoding, cache and coalesce concurrent tokens', async () => {
  let calls = 0;
  const provider = new ClientCredentialsTokenProvider('https://example.test/token', 'client', 'secret', async (url, options) => {
    calls++; assert.equal(url, 'https://example.test/token');
    assert.equal(options.body.get('grant_type'), 'client_credentials'); assert.equal(options.body.get('client_id'), 'client');
    assert.equal(options.body.get('client_secret'), 'secret');
    return Response.json({ access_token: 'access', expires_in: 3600 });
  });
  assert.deepEqual(await Promise.all([provider.getToken(), provider.getToken()]), ['access', 'access']);
  assert.equal(await provider.getToken(), 'access'); assert.equal(calls, 1);
});
test('expiring credentials are renewed and failed fetches can be retried', async () => {
  let calls = 0;
  const provider = new ClientCredentialsTokenProvider('https://example.test', 'id', 'secret', async () => {
    if (++calls === 1) throw new Error('secret response');
    return Response.json({ access_token: `token${calls}`, expires_in: 1 });
  });
  await assert.rejects(provider.getToken(), error => error instanceof WebSocketAuthenticationError && !error.message.includes('secret response'));
  assert.equal(await provider.getToken(), 'token2'); assert.equal(await provider.getToken(), 'token3');
});
for (const response of [() => new Response('private', { status: 401 }), () => Response.json({ access_token: '' }),
  () => Response.json({ access_token: 'token', expires_in: 'no' })]) {
  test('rejects bad OAuth responses without exposing their bodies', async () => {
    const provider = new ClientCredentialsTokenProvider('https://example.test', 'id', 'secret', async () => response());
    await assert.rejects(provider.getToken(), WebSocketAuthenticationError);
  });
}
test('callback supports sync and async tokens', async () => {
  assert.equal(await new CallbackTokenProvider(() => 'a').getToken(), 'a');
  assert.equal(await new CallbackTokenProvider(async () => 'b').getToken(), 'b');
});
test('SDK resource validates authentication selection', async () => {
  const resource = new FinanceDev().websocket.market;
  await assert.rejects(resource.connect(), WebSocketAuthenticationError);
  await assert.rejects(resource.connect({ accessToken: '' }), WebSocketAuthenticationError);
  await assert.rejects(resource.connect({ accessToken: 'a', tokenProvider: () => 'b' }), WebSocketAuthenticationError);
});
test('SDK security factory supplies client credentials to websocket OAuth', async t => {
  const { url, received } = await serve(t);
  const original = globalThis.fetch;
  globalThis.fetch = async (target, options) => {
    assert.equal(target, 'https://example.test/token'); assert.equal(options.body.get('client_id'), 'id');
    return Response.json({ access_token: 'oauth-token' });
  };
  t.after(() => { globalThis.fetch = original; });
  const sdk = new FinanceDev({ security: async () => ({ clientID: 'id', clientSecret: 'secret', tokenURL: 'https://example.test/token' }) });
  const stream = await sdk.websocket.market.connect({ url, config });
  t.after(() => stream.close());
  assert.equal(received[0].message.payload.body.token, 'oauth-token');
});
