// Regression coverage for Speakeasy's omitted empty-array expected literals.
import { expect, test } from 'vitest';
import { FinanceDev, HTTPClient } from '../../src/index.js';

function client(method: string, path: string, response: unknown): FinanceDev {
  return new FinanceDev({
    serverURL: 'https://contract.test',
    httpClient: new HTTPClient({
      fetcher: async request => {
        const outgoing = request instanceof Request ? request : new Request(request);
        expect(outgoing.method).toBe(method);
        expect(new URL(outgoing.url).pathname).toBe(path);
        if (method === 'PUT') expect(await outgoing.json()).toEqual([]);
        return Response.json(response, { status: method === 'PUT' ? 201 : 200 });
      },
    }),
  });
}
test('watchlist deletion retains the empty symbols array', async () => {
  const response = { id: 12345, name: 'Default', symbols: [] };
  const result = await client('DELETE', '/v1/config/watchlist/12345', response).watchlist.delete({ watchlistId: 12345 });
  expect(result).toEqual(response);
});
test('replacing watchlists retains the empty default symbols array', async () => {
  const response = { user_id: 98765, watchlist: [{ id: 12348, name: 'Default', symbols: [] }] };
  const result = await client('PUT', '/v1/config/watchlist', response).watchlists.replaceAll([]);
  expect(result).toEqual({ userId: 98765, watchlist: [{ id: 12348, name: 'Default', symbols: [] }] });
});
