import { isObject } from './codec.js';
import type { WireMessage } from './models.js';

function canonical(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(canonical);
  if (isObject(value)) return Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])]));
  return value;
}
export function subscriptionKey(message: WireMessage): string {
  return JSON.stringify(canonical(message.payload));
}
/** Keep replay state consistent after full, category, or field-level removal. */
export function applyUnsubscribe(active: Map<string, WireMessage>, message: WireMessage): void {
  const removals = Array.isArray(message.payload) ? message.payload : [message.payload];
  for (const value of removals) {
    const removal = typeof value === 'string' ? { symbol: value } : value;
    if (!isObject(removal)) continue;
    for (const [key, subscription] of Array.from(active)) {
      const body = subscription.payload;
      if (isObject(body) && removal['topic'] === body['topic'] && removal['topic']) {
        const params = removal['params'], originalParams = body['params'];
        if (!params || (isObject(params) && isObject(originalParams) && Object.entries(params).every(
          ([field, value]) => JSON.stringify(canonical(value)) === JSON.stringify(canonical(originalParams[field]))))) active.delete(key);
        continue;
      }
      if (!removal['symbol']) continue;
      const items = Array.isArray(body) ? body : [body];
      const kept = items.flatMap(original => {
        if (!isObject(original) || original['symbol'] !== removal['symbol']) return [original];
        if (Object.keys(removal).every(field => ['symbol', 'type'].includes(field))) return [];
        const current = { ...original };
        if (Object.keys(current).every(field => ['symbol', 'symbolType'].includes(field))) {
          current['quoteFields'] = '*'; current['tradeFields'] = '*';
        }
        for (const [category, field] of Object.entries({ quote: 'quoteFields', trade: 'tradeFields',
          greeks: 'greeksFields', level2: 'level2', timeAndSales: 'timeAndSales' })) {
          if (removal[category]) delete current[field];
        }
        for (const field of ['quoteFields', 'tradeFields', 'greeksFields', 'timeAndSalesFields']) {
          const removed = removal[field], existing = current[field];
          if (Array.isArray(removed) && Array.isArray(existing)) {
            const remaining = existing.filter(item => !removed.includes(item));
            if (remaining.length) current[field] = remaining;
            else delete current[field];
          }
        }
        return Object.keys(current).every(field => ['symbol', 'type', 'symbolType'].includes(field)) ? [] : [current];
      });
      active.delete(key);
      if (kept.length) {
        const updated = { ...subscription, payload: Array.isArray(body) ? kept : kept[0] };
        active.set(subscriptionKey(updated), updated);
      }
    }
  }
}
