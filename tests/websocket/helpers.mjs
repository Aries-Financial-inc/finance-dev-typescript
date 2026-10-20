import { WebSocketServer } from 'ws';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import assert from 'node:assert/strict';

export async function serve(t, handler) {
  const server = new WebSocketServer({ host: '127.0.0.1', port: 0 });
  await once(server, 'listening');
  const received = [];
  let count = 0;
  server.on('connection', socket => {
    const session = ++count;
    socket.on('message', raw => {
      const message = JSON.parse(raw.toString());
      received.push({ session, message });
      if (handler?.(socket, message, session) === true) return;
      const payload = message.payload ?? {};
      if (payload.path === '/auth') send(socket, { type: 'response', id: message.id, payload: { action: 'authSuccess' } });
      else if (message.type === 'ping') send(socket, { type: 'pong', id: message.id });
      else if (message.type === 'request') send(socket, { type: 'response', id: message.id, payload: { data: { ok: true }, path: payload.path } });
      else if (['subscribe', 'unsubscribe'].includes(message.type) && payload.topic) {
        send(socket, { type: 'subscribed', id: message.id, payload: { status: 200, ...payload, data: { account: {}, positions: [], ordersV2: [] } } });
      }
    });
  });
  t.after(async () => { for (const socket of server.clients) socket.terminate(); await new Promise(resolve => server.close(resolve)); });
  return { url: `ws://127.0.0.1:${server.address().port}`, received, server };
}
export function send(socket, message) { socket.send(JSON.stringify(message)); }
export const config = { pingInterval: 60_000, closeTimeout: 500, authTimeout: 300, requestTimeout: 500,
  reconnectInitialDelay: 5, reconnectMaxDelay: 10, reconnectJitter: 0 };
export async function eventually(predicate) {
  for (let i = 0; i < 200; i++) { if (predicate()) return; await delay(5); }
  assert.fail('Condition did not become true');
}
