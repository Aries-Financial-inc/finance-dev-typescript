import { FinanceDev } from '../../src/index.js';
import { WebSocketConfig, WebSocketSDK, type QuoteData, type PnlInterval } from '../../src/websocket/index.js';

const sdk = new FinanceDev();
const config = new WebSocketConfig({ pingInterval: 100, incomingQueueSize: 8, reconnect: false });
const standalone: WebSocketSDK = sdk.websocket;
async function exercise(): Promise<void> {
  const market = await standalone.market.connect({ accessToken: 'token', config });
  await market.subscribe([{ symbol: 'AAPL', quoteFields: '*', timeAndSales: true }]);
  await market.unsubscribe([{ symbol: 'AAPL', quoteFields: ['bidPrice'] }]);
  await market.getOptionExpiryDates('AAPL');
  const chart = await sdk.websocket.chart.connect({ tokenProvider: async () => 'token' });
  await chart.subscribe('AAPL', { dataType: 'bars' });
  const account = await sdk.websocket.account.connect({ tokenProvider: { getToken: () => 'token' } });
  const interval: PnlInterval = '15s';
  await account.subscribePnl('A', new Date(), interval);
  const quote: QuoteData = { bidPrice: 1.2, bidTimestamp: 123, futureField: 'preserved' };
  console.log(quote);
  // @ts-expect-error Market subscriptions must be arrays.
  await market.subscribe({ symbol: 'AAPL' });
  // @ts-expect-error P&L only accepts supported intervals.
  await account.subscribePnl('A', new Date(), '2m');
  await Promise.all([market.close(), chart.close(), account.close()]);
}
void exercise;
