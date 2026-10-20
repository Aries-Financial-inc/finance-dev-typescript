import { test } from 'node:test';
import assert from 'node:assert/strict';
import { setTimeout as delay } from 'node:timers/promises';
import { FinanceDev } from '../../esm/index.js';
import { WebSocketConnection, StaticTokenProvider, WebSocketConfig, WebSocketConnectionStateError,
  WebSocketAuthenticationError, WebSocketRequestError, WebSocketBackpressureError, WebSocketProtocolError,
  WebSocketConnectionError } from '../../esm/websocket/index.js';
import { serve, send, config, eventually } from './helpers.mjs';

async function connect(t, handler, endpoint = 'market', overrides = {}) {
  const local = await serve(t, handler);
  const stream = await new FinanceDev().websocket[endpoint].connect({ url: local.url, accessToken: 'test-token', config: { ...config, ...overrides } });
  t.after(() => stream.close());
  return { ...local, stream };
}
test('authenticates before returning; concurrent requests correlate out of order', async t => {
  const held = [];
  const { stream, received } = await connect(t, (socket, message) => {
    if (message.payload?.path !== '/one' && message.payload?.path !== '/two') return;
    held.push(message);
    if (held.length === 2) for (const item of held.reverse()) send(socket, { type: 'response', id: item.id, payload: { path: item.payload.path } });
    return true;
  });
  assert.equal(stream.state, 'READY'); assert.equal(received[0].message.payload.body.token, 'test-token');
  const [one, two] = await Promise.all([stream.request('GET', '/one'), stream.request('GET', '/two')]);
  assert.equal(one.payload.path, '/one'); assert.equal(two.payload.path, '/two');
});
test('supports id-less auth events and payload-level response IDs', async t => {
  const { stream } = await connect(t, (socket, message) => {
    if (message.payload?.path === '/auth') send(socket, { type: 'event', payload: { action: 'authSuccess' } });
    else if (message.type === 'request') send(socket, { type: 'response', payload: { id: message.id, ok: true } });
    else return;
    return true;
  });
  assert.equal((await stream.request('GET', '/test')).payload.ok, true);
});
test('correlated request errors preserve status, code and request ID', async t => {
  const { stream } = await connect(t, (socket, message) => {
    if (message.payload?.path !== '/bad') return;
    send(socket, { type: 'response', id: message.id, payload: { status: 403, code: 'DENIED', error: 'denied' } }); return true;
  });
  await assert.rejects(stream.request('GET', '/bad'), error => error instanceof WebSocketRequestError && error.status === 403 && error.code === 'DENIED' && !!error.requestId);
  assert.equal(stream.state, 'READY');
});
test('market and chart subscriptions preserve wire formats', async t => {
  const { stream, received } = await connect(t);
  const id = await stream.subscribe([{ symbol: 'AAPL', quoteFields: '*', tradeFields: ['price'], timeAndSales: true }]);
  assert.equal(await stream.subscribe([{ tradeFields: ['price'], symbol: 'AAPL', timeAndSales: true, quoteFields: '*' }]), id);
  await stream.unsubscribe([{ symbol: 'AAPL', trade: true }]);
  await stream.getOptionExpiryDates('AAPL');
  await stream.getOptionContractSymbols('AAPL', '2026-12-18');
  assert.deepEqual(received[1].message.payload, [{ symbol: 'AAPL', quoteFields: '*', tradeFields: ['price'], timeAndSales: true }]);
  assert.equal(received.filter(x => x.message.type === 'subscribe').length, 1);
  const chart = await new FinanceDev().websocket.chart.connect({ url: stream.url, accessToken: 'token', config });
  t.after(() => chart.close());
  await chart.subscribe('SPY', { dataType: 'bars', symbolType: 'equity' }); await chart.unsubscribe('SPY');
  await chart.request('GET', '/barrier');
  assert.deepEqual(received.find(x => x.message.payload?.type === 'bars').message.payload, { type: 'bars', symbol: 'SPY', symbolType: 'equity' });
});
test('account helpers return acknowledged snapshots and validate P&L', async t => {
  const { stream, received } = await connect(t, undefined, 'account');
  assert.deepEqual((await stream.subscribeAccount('ACC1')).payload.data, { account: {}, positions: [], ordersV2: [] });
  await stream.subscribePnl('ACC1', '2026-10-20T12:00:00+05:30', '15s');
  await stream.subscribePnl('ACC2', new Date('2026-10-20T00:00:00Z'));
  await stream.subscribeWatchlist(); await stream.subscribeNews({ symbols: ['AAPL'], topics: ['business'] });
  await stream.unsubscribeAccount('ACC1'); await stream.unsubscribePnl('ACC1');
  await stream.unsubscribeWatchlist(); await stream.unsubscribeNews();
  assert.throws(() => stream.subscribePnl('ACC1', '2026-10-20T12:00:00'));
  assert.throws(() => stream.subscribePnl('ACC1', '2026-10-20T12:00:00Z', 'bad'));
  assert.deepEqual(received[2].message.payload, { topic: 'pnl', params: { accountId: 'ACC1', startTime: '2026-10-20T12:00:00+05:30', interval: '15s' } });
});
for (const action of ['authRequired', 'authTimeout', 'rejected', 'silent']) {
  test(`authentication failure closes stream: ${action}`, async t => {
    const { url, server } = await serve(t, (socket, message) => {
      if (message.payload?.path !== '/auth') return;
      if (action !== 'silent') send(socket, { type: 'response', id: message.id, payload: { action, status: 401 } });
      return true;
    });
    await assert.rejects(new FinanceDev().websocket.market.connect({ url, accessToken: 'token', config: { ...config, authTimeout: 30 } }), WebSocketAuthenticationError);
    await eventually(() => server.clients.size === 0);
  });
}
test('hanging token provider is bounded by auth timeout', async t => {
  const { url } = await serve(t);
  await assert.rejects(new FinanceDev().websocket.market.connect({ url, tokenProvider: () => new Promise(() => {}), config: { ...config, authTimeout: 20 } }), WebSocketAuthenticationError);
});
test('refreshAuth asks provider for a fresh token', async t => {
  let calls = 0;
  const { url, received, server } = await serve(t);
  const stream = await new FinanceDev().websocket.market.connect({ url, tokenProvider: () => `token-${++calls}`, config });
  t.after(() => stream.close());
  send([...server.clients][0], { type: 'event', payload: { action: 'refreshAuth' } });
  await eventually(() => received.filter(x => x.message.payload?.path === '/auth').length === 2);
  assert.equal(received.at(-1).message.payload.body.token, 'token-2');
});
test('drains queued events before reporting backpressure once', async t => {
  const { stream } = await connect(t, (socket, message) => {
    if (message.type !== 'subscribe') return;
    socket.send([0, 1, 2].map(sequence => JSON.stringify({ type: 'event', payload: { sequence } })).join('\n')); return true;
  }, 'market', { incomingQueueSize: 1 });
  await stream.subscribe([{ symbol: 'AAPL' }]); await eventually(() => stream.state === 'FAILED');
  assert.equal((await stream.next()).value.payload.sequence, 0);
  await assert.rejects(stream.next(), WebSocketBackpressureError);
  assert.equal((await stream.next()).done, true);
});
for (const frame of ['{', 'x'.repeat(201)]) {
  test('protocol failures are terminal and do not reconnect', async t => {
    const { stream, server } = await connect(t, undefined, 'market', { maxMessageSize: 200 });
    [...server.clients][0].send(frame);
    await assert.rejects(stream.next(), WebSocketProtocolError); assert.equal(stream.state, 'FAILED');
  });
}
test('binary NDJSON events retain arrival order', async t => {
  const { stream, server } = await connect(t);
  [...server.clients][0].send(Buffer.from('{"type":"event","payload":{"seq":1}}\n{"type":"event","payload":{"seq":2}}'));
  assert.equal((await stream.getEvent()).payload.seq, 1); assert.equal((await stream.getEvent()).payload.seq, 2);
});
test('close cancels pending requests and wakes iterators; repeat close is safe', async t => {
  const { stream } = await connect(t, (_socket, message) => message.payload?.path === '/never' ? true : undefined);
  const request = assert.rejects(stream.request('GET', '/never'), WebSocketConnectionStateError);
  const event = stream.next(); await stream.close(); await request;
  assert.equal((await event).done, true); assert.equal(stream.state, 'CLOSED'); await stream.close();
});
test('breaking async iteration closes the socket', async t => {
  const { stream, server } = await connect(t);
  send([...server.clients][0], { type: 'event', payload: { value: 1 } });
  for await (const event of stream) { assert.equal(event.payload.value, 1); break; }
  assert.equal(stream.state, 'CLOSED');
});
test('requests time out and closed connections reject operations', async t => {
  const { stream } = await connect(t, (_socket, message) => message.payload?.path === '/never' ? true : undefined);
  await assert.rejects(stream.request('GET', '/never', { timeout: 15 }), WebSocketConnectionError);
  await stream.close(); await assert.rejects(stream.subscribe([{ symbol: 'AAPL' }]), WebSocketConnectionStateError);
  const fresh = new WebSocketConnection(stream.url, new StaticTokenProvider('token'), new WebSocketConfig(config));
  await assert.rejects(fresh.request('GET', '/x'), WebSocketConnectionStateError);
});
for (const replaySubscriptions of [true, false]) {
  test(`reconnect authenticates and respects replaySubscriptions=${replaySubscriptions}`, async t => {
    const { stream, received, server } = await connect(t, undefined, 'market', { replaySubscriptions });
    await stream.subscribe([{ symbol: 'AAPL', quoteFields: ['bidPrice', 'askPrice'], tradeFields: '*' }, { symbol: 'MSFT' }]);
    await stream.unsubscribe([{ symbol: 'AAPL', quoteFields: ['bidPrice'] }, 'MSFT']);
    await stream.request('GET', '/barrier'); [...server.clients][0].terminate();
    await eventually(() => received.some(x => x.session === 2) && stream.state === 'READY');
    await stream.request('GET', '/barrier');
    const replay = received.filter(x => x.session === 2 && x.message.type === 'subscribe');
    assert.equal(replay.length, replaySubscriptions ? 1 : 0);
    if (replaySubscriptions) assert.deepEqual(replay[0].message.payload, [{ symbol: 'AAPL', quoteFields: ['askPrice'], tradeFields: '*' }]);
    assert.equal(received.find(x => x.session === 2).message.payload.path, '/auth');
  });
}
test('account replay retains other accounts after targeted unsubscribe', async t => {
  const { stream, received, server } = await connect(t, undefined, 'account');
  await stream.subscribeAccount('A'); await stream.subscribeAccount('B'); await stream.unsubscribeAccount('A');
  [...server.clients][0].terminate();
  await eventually(() => received.some(x => x.session === 2 && x.message.type === 'subscribe'));
  assert.deepEqual(received.filter(x => x.session === 2 && x.message.type === 'subscribe').map(x => x.message.payload), [{ topic: 'account', params: { accountId: 'B' } }]);
});
test('reconnect authentication rejection is terminal', async t => {
  const { stream, server } = await connect(t, (socket, message, session) => {
    if (session < 2 || message.payload?.path !== '/auth') return;
    send(socket, { type: 'response', id: message.id, payload: { status: 401 } }); return true;
  });
  [...server.clients][0].terminate(); await assert.rejects(stream.next(), WebSocketAuthenticationError);
});
test('authExpired reauthenticates with provider then replays', async t => {
  let calls = 0;
  const { url, server, received } = await serve(t);
  const stream = await new FinanceDev().websocket.market.connect({ url, config, tokenProvider: async () => `fresh-${++calls}` });
  t.after(() => stream.close());
  await stream.subscribe([{ symbol: 'AAPL' }]); await stream.request('GET', '/barrier');
  send([...server.clients][0], { type: 'event', payload: { action: 'authExpired' } });
  await eventually(() => received.some(x => x.session === 2 && x.message.type === 'subscribe'));
  assert.equal(received.find(x => x.session === 2).message.payload.body.token, 'fresh-2');
});
test('disabled reconnect reports disconnect to blocked iterator', async t => {
  const { stream, server } = await connect(t, undefined, 'market', { reconnect: false });
  [...server.clients][0].terminate(); await assert.rejects(stream.next(), WebSocketConnectionError);
});
test('heartbeat sends ping, responds to server ping, and reconnects on missing pong', async t => {
  const { stream, server, received } = await connect(t, (_socket, message, session) => message.type === 'ping' && session === 1 ? true : undefined,
    'market', { pingInterval: 10, pongTimeout: 15 });
  send([...server.clients][0], { type: 'ping', id: 'server-ping' });
  await eventually(() => received.some(x => x.session === 2) && stream.state === 'READY');
  assert.ok(received.some(x => x.message.type === 'pong' && x.message.id === 'server-ping'));
  await eventually(() => received.some(x => x.session === 2 && x.message.type === 'ping'));
});
test('close cancels reconnect backoff immediately', async t => {
  const { stream, server } = await connect(t, undefined, 'market', { reconnectInitialDelay: 60_000, reconnectMaxDelay: 60_000 });
  [...server.clients][0].terminate(); await eventually(() => stream.state === 'RECONNECTING');
  await stream.close(); await delay(10); assert.equal(stream.state, 'CLOSED');
});
test('refresh rejection closes stream without leaking a pending iterator', async t => {
  let auths = 0;
  const { stream, server } = await connect(t, (socket, message) => {
    if (message.payload?.path !== '/auth' || ++auths === 1) return;
    send(socket, { type: 'response', id: message.id, payload: { status: 401 } }); return true;
  });
  send([...server.clients][0], { type: 'event', payload: { action: 'refreshAuth' } });
  await assert.rejects(stream.next(), WebSocketAuthenticationError);
});
test('failed account subscriptions are not replayed', async t => {
  const { stream, server, received } = await connect(t, (socket, message) => {
    if (message.type !== 'subscribe') return;
    send(socket, { type: 'response', id: message.id, payload: { status: 403, error: 'denied' } }); return true;
  }, 'account');
  await assert.rejects(stream.subscribeAccount('A'), WebSocketRequestError);
  [...server.clients][0].terminate();
  await eventually(() => received.some(x => x.session === 2) && stream.state === 'READY');
  await stream.request('GET', '/barrier');
  assert.equal(received.filter(x => x.session === 2 && x.message.type === 'subscribe').length, 0);
});
test('reconnect exhaustion terminates iteration', async t => {
  const { stream, server, received } = await connect(t, (socket, _message, session) => {
    if (session === 1) return;
    socket.terminate(); return true;
  });
  [...server.clients][0].terminate();
  await assert.rejects(stream.next(), /reconnect attempts exhausted/);
  assert.equal(stream.state, 'FAILED'); assert.equal(Math.max(...received.map(x => x.session)), 9);
});
test('P&L unsubscribe removes replay using accountId without matching startTime', async t => {
  const { stream, server, received } = await connect(t, undefined, 'account');
  await stream.subscribePnl('A', '2026-10-20T00:00:00Z');
  await stream.subscribePnl('B', '2026-10-20T00:00:00Z');
  await stream.unsubscribePnl('A'); [...server.clients][0].terminate();
  await eventually(() => received.some(x => x.session === 2 && x.message.type === 'subscribe'));
  assert.deepEqual(received.filter(x => x.session === 2 && x.message.type === 'subscribe').map(x => x.message.payload.params.accountId), ['B']);
});
test('partial removal from default market streams retains the other category', async t => {
  const { stream, server, received } = await connect(t);
  await stream.subscribe([{ symbol: 'AAPL' }]); await stream.unsubscribe([{ symbol: 'AAPL', quote: true }]);
  await stream.request('GET', '/barrier'); [...server.clients][0].terminate();
  await eventually(() => received.some(x => x.session === 2 && x.message.type === 'subscribe'));
  assert.deepEqual(received.find(x => x.session === 2 && x.message.type === 'subscribe').message.payload, [{ symbol: 'AAPL', tradeFields: '*' }]);
});
