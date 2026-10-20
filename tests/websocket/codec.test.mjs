import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { decodeFrame, encodeMessage, WebSocketConfig, WebSocketProtocolError, WebSocketConfigurationError,
  parseLevel2Row } from '../../esm/websocket/index.js';

for (const endpoint of ['market', 'chart', 'account']) {
  test(`decodes Python ${endpoint} wire fixtures without losing fields`, () => {
    const text = readFileSync(new URL(`./fixtures/${endpoint}.json`, import.meta.url), 'utf8');
    assert.deepEqual(decodeFrame(text), text.trim().split('\n').map(JSON.parse));
    assert.deepEqual(decodeFrame(new TextEncoder().encode(text)), decodeFrame(text));
  });
}
test('NDJSON, unknown messages and compact encoding', () => {
  assert.deepEqual(decodeFrame('\n{"type":"future","extra":42}\r\n{"type":"ping"}\n'), [{ original: { type: 'future', extra: 42 } }, { type: 'ping' }]);
  assert.equal(encodeMessage({ type: 'subscribe', payload: [{ symbol: 'AAPL', quoteFields: '*', timeAndSales: true }] }), '{"type":"subscribe","payload":[{"symbol":"AAPL","quoteFields":"*","timeAndSales":true}]}');
  assert.deepEqual(parseLevel2Row('bid,10.2,500'), ['bid', '10.2', '500']);
});
for (const frame of ['[]', '{', '{"type":"event","payload":[]}', '{"type":"request","payload":{}}', '{"type":"ping","id":2}', new Uint8Array([255])]) {
  test(`rejects invalid frame ${String(frame)}`, () => assert.throws(() => decodeFrame(frame), WebSocketProtocolError));
}
for (const options of [{ pingInterval: 0 }, { authTimeout: NaN }, { incomingQueueSize: 1.2 }, { maxMessageSize: Infinity },
  { reconnectJitter: -1 }, { reconnectJitter: NaN }, { reconnectInitialDelay: 20, reconnectMaxDelay: 10 }, { reconnect: 'yes' }]) {
  test(`validates config ${JSON.stringify(options)}`, () => assert.throws(() => new WebSocketConfig(options), WebSocketConfigurationError));
}
