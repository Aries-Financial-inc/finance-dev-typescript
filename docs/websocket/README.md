# WebSocket streams

`FinanceDev.websocket` provides market, chart, and account streams. Use Node.js
22+ or a browser with native `WebSocket`. On other runtimes, pass a compatible
`webSocketFactory` to `connect()`. No transport dependency is required at runtime.

```typescript
import { FinanceDev } from 'finance-dev';
import type { MarketSubscription } from 'finance-dev/websocket';

const sdk = new FinanceDev();
const stream = await sdk.websocket.market.connect({ accessToken });
try {
  const subscriptions: MarketSubscription[] = [
    { symbol: 'AAPL', quoteFields: ['bidPrice', 'askPrice'] },
  ];
  await stream.subscribe(subscriptions);
  for await (const event of stream) console.log(event);
} finally {
  await stream.close();
}
```

`connect()` resolves after authentication. Always close in `finally`; breaking
from `for await` also closes the connection. `getEvent()` returns one message or
`undefined` after closure. Wire names and unknown fields are preserved. Unknown
message types return `{ original: ... }`. Newline-delimited JSON in text and
binary frames is decoded in order. Exported interfaces describe partial updates;
merge updates with previous snapshots when a complete value is needed.

## Authentication

Choose `accessToken`, `tokenProvider`, or SDK `security.clientID` and
`security.clientSecret`. Client credentials use OAuth with caching until 30
seconds before expiry; `security.tokenURL` overrides the token endpoint.
Partner/business clients should supply an Authorization Code or PKCE token.
The websocket client never logs credentials or tokens. The access token is sent
in the protocol `/auth` request, not the connection URL.

```typescript
const stream = await sdk.websocket.market.connect({
  tokenProvider: async () => refreshAccessToken(),
});
```

A provider can instead implement `getToken()`. Providers are called on reconnect
and `refreshAuth`; a static token cannot be renewed. `StaticTokenProvider`,
`CallbackTokenProvider`, and `ClientCredentialsTokenProvider` are exported from
`finance-dev/websocket`.

## Market

Market subscriptions always use arrays, including for one symbol:

```typescript
await stream.subscribe([
  { symbol: 'AAPL', quoteFields: '*', tradeFields: '*', timeAndSales: true },
]);
await stream.unsubscribe([{ symbol: 'AAPL', quoteFields: ['bidPrice'] }]);
await stream.unsubscribe(['AAPL']);
const expirations = await stream.getOptionExpiryDates('AAPL');
const contracts = await stream.getOptionContractSymbols('AAPL', '2026-12-18');
```

`'*'` requests all fields; `'all'` is not a supported wildcard. A symbol alone
selects quotes and trades. `timeAndSales: true` or `level2: true` alone selects
only that stream; explicitly request quote/trade fields to combine them.
Events use `payload.action` (`snapshot` or `update`), `payload.type`,
`payload.symbol`, and `payload.data`. `QuoteData` and `TradeData` timestamps are
Unix milliseconds; `TimeAndSalesData` values, including timestamps, are strings.
`parseLevel2Row()` splits compact rows without numeric conversion.

## Chart and account

```typescript
const chart = await sdk.websocket.chart.connect({ accessToken });
try {
  await chart.subscribe('AAPL', { dataType: 'bars', symbolType: 'equity' });
  for await (const event of chart) console.log(event);
} finally { await chart.close(); }
```

Chart defaults to `dataType: 'quotes'`. Bars currently arrive in the server's
quotes-shaped TradingView form. Wire keys such as `s`, `n`, `v`, and `lp` are
preserved in the TradingView interfaces.

```typescript
const account = await sdk.websocket.account.connect({ accessToken });
try {
  const acknowledgement = await account.subscribeAccount('ACC123');
  console.log(acknowledgement.payload); // Includes the initial snapshot.
  await account.subscribePnl('ACC123', '2026-10-20T09:30:00-04:00', '1m');
  await account.subscribeWatchlist();
  await account.subscribeNews({ symbols: ['AAPL'] });
  for await (const event of account) console.log(event);
} finally { await account.close(); }
```

Account helpers wait for correlated acknowledgements and have matching
`unsubscribeAccount`, `unsubscribePnl`, `unsubscribeWatchlist`, and
`unsubscribeNews` helpers. `account.balance.apex` contains partial balance data;
watchlist/news event data is an array. P&L accepts a `Date` or timezone-aware
RFC3339 string and intervals `15s`, `1m`, `5m`, `15m`, `1h`, `1d`, and `1mo`.
Every connection supports `request(method, path, { query, body, timeout })`.

## Recovery and configuration

`connect()` accepts `url` and `config`. **All durations are milliseconds.**
Defaults match Python: 10 seconds to connect, 4 to authenticate, 10 per request,
30 between pings, and 10 for pong or graceful close. Reconnect uses exponential
backoff from 1 to 60 seconds with 20% jitter and eight attempts. Authentication
and protocol failures are terminal. Reconnect authenticates then replays active
subscriptions, respecting symbol, field, and account-topic unsubscriptions.
In-flight requests fail on disconnect and are not replayed.

Use `reconnect: false` or `replaySubscriptions: false` to change recovery.
Drain events promptly: the default buffer holds 1,000 messages. Overflow closes
the socket and raises `WebSocketBackpressureError` after queued messages drain.
Change `incomingQueueSize` or `maxMessageSize` (default 1 MiB per frame) as needed.

Handle `WebSocketAuthenticationError`, `WebSocketRequestError` (`status`, `code`,
`requestId`), `WebSocketProtocolError`, `WebSocketConnectionError`, and
`WebSocketBackpressureError` separately when different recovery is appropriate.
