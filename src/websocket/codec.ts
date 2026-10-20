import { WebSocketProtocolError } from './errors.js';
import type { InboundMessage, WireObject } from './models.js';

export function isObject(value: unknown): value is WireObject {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}
export function decodeFrame(frame: string | Uint8Array | ArrayBuffer): InboundMessage[] {
  let text: string;
  try { text = typeof frame === 'string' ? frame : new TextDecoder('utf-8', { fatal: true }).decode(frame); }
  catch { throw new WebSocketProtocolError('Invalid UTF-8 websocket frame'); }
  const messages: InboundMessage[] = [];
  for (const [index, line] of text.split(/\r?\n/).entries()) {
    if (!line.trim()) continue;
    let value: unknown;
    try { value = JSON.parse(line); }
    catch { throw new WebSocketProtocolError(`Invalid JSON at line ${index + 1}`); }
    if (!isObject(value)) throw new WebSocketProtocolError(`JSON value must be an object at line ${index + 1}`);
    const type = value['type'];
    if (!['request', 'response', 'event', 'subscribe', 'unsubscribe', 'subscribed', 'ping', 'pong'].includes(String(type))) {
      messages.push({ original: value }); continue;
    }
    if (typeof type !== 'string' || (value['id'] !== undefined && typeof value['id'] !== 'string') ||
      (type === 'request' && (typeof value['id'] !== 'string' || !isObject(value['payload']))) ||
      (['response', 'event', 'subscribed'].includes(type) && value['payload'] !== undefined && !isObject(value['payload'])) ||
      (['subscribe', 'unsubscribe'].includes(type) && !('payload' in value))) {
      throw new WebSocketProtocolError(`Invalid ${type} message at line ${index + 1}`);
    }
    messages.push({ ...value, type });
  }
  return messages;
}
export function encodeMessage(message: unknown): string { return JSON.stringify(message); }
