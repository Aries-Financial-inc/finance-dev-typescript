import type { SDKOptions } from '../lib/config.js';
import { CallbackTokenProvider, ClientCredentialsTokenProvider, StaticTokenProvider, type TokenProvider } from './auth.js';
import { WebSocketConfig, ACCOUNT_URL, CHART_URL, MARKET_URL } from './config.js';
import { WebSocketConnection, type WebSocketFactory } from './connection.js';
import { WebSocketAuthenticationError, WebSocketConfigurationError } from './errors.js';
import type { MarketSubscription, MarketUnsubscribe, NewsSubscription, PnlInterval, WireMessage, WireObject } from './models.js';

export interface ConnectOptions {
  accessToken?: string;
  tokenProvider?: TokenProvider | (() => string | Promise<string>);
  url?: string;
  config?: Partial<WebSocketConfig>;
  /** Supply a compatible implementation on runtimes without native WebSocket. */
  webSocketFactory?: WebSocketFactory;
}

export class MarketConnection extends WebSocketConnection {
  async subscribe(items: MarketSubscription[]): Promise<string> {
    if (!Array.isArray(items) || items.some(item => typeof item.symbol !== 'string' || !item.symbol)) {
      throw new WebSocketConfigurationError('Market subscriptions must be an array of symbols');
    }
    return await this.subscribePayload(items) as string;
  }
  async unsubscribe(items: (string | MarketUnsubscribe)[]): Promise<string> {
    if (!Array.isArray(items)) throw new WebSocketConfigurationError('Market unsubscriptions must be an array');
    return await this.unsubscribePayload(items) as string;
  }
  getOptionExpiryDates(symbol: string): Promise<WireMessage> {
    return this.request('GET', `/options/${encodeURIComponent(symbol)}/expiry-dates`);
  }
  getOptionContractSymbols(symbol: string, expiration: string): Promise<WireMessage> {
    return this.request('GET', `/options/${encodeURIComponent(symbol)}/contracts/${encodeURIComponent(expiration)}`);
  }
}
export class ChartConnection extends WebSocketConnection {
  async subscribe(symbol: string, options: { dataType?: string; symbolType?: string } = {}): Promise<string> {
    return await this.subscribePayload({ type: options.dataType ?? 'quotes', symbol,
      ...(options.symbolType ? { symbolType: options.symbolType } : {}) }) as string;
  }
  async unsubscribe(symbol: string): Promise<string> {
    return await this.unsubscribePayload({ type: 'quotes', symbol }) as string;
  }
}
export class AccountConnection extends WebSocketConnection {
  private async sub(topic: string, params?: WireObject): Promise<WireMessage> {
    return await this.subscribePayload({ topic, ...(params ? { params } : {}) }, true) as WireMessage;
  }
  private async unsub(topic: string, params?: WireObject): Promise<WireMessage> {
    return await this.unsubscribePayload({ topic, ...(params ? { params } : {}) }, true) as WireMessage;
  }
  subscribeAccount(accountId: string): Promise<WireMessage> { return this.sub('account', { accountId }); }
  unsubscribeAccount(accountId: string): Promise<WireMessage> { return this.unsub('account', { accountId }); }
  subscribePnl(accountId: string, startTime: string | Date, interval: PnlInterval = '1m'): Promise<WireMessage> {
    const timestamp = startTime instanceof Date ? startTime.toISOString() : startTime;
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(timestamp) || !Number.isFinite(Date.parse(timestamp))) {
      throw new WebSocketConfigurationError('startTime must be a timezone-aware RFC3339 timestamp');
    }
    if (!['15s', '1m', '5m', '15m', '1h', '1d', '1mo'].includes(interval)) throw new WebSocketConfigurationError('Unsupported P&L interval');
    return this.sub('pnl', { accountId, startTime: timestamp, interval });
  }
  unsubscribePnl(accountId: string): Promise<WireMessage> { return this.unsub('pnl', { accountId }); }
  subscribeWatchlist(): Promise<WireMessage> { return this.sub('watchlist'); }
  unsubscribeWatchlist(): Promise<WireMessage> { return this.unsub('watchlist'); }
  subscribeNews(options: NewsSubscription = {}): Promise<WireMessage> { return this.sub('news', options); }
  unsubscribeNews(): Promise<WireMessage> { return this.unsub('news'); }
}

type ConnectionConstructor<T extends WebSocketConnection> = new (url: string, provider: TokenProvider,
  config: WebSocketConfig, factory?: WebSocketFactory) => T;
export class WebSocketResource<T extends WebSocketConnection> {
  constructor(readonly endpoint: string, private readonly options: SDKOptions,
    private readonly Connection: ConnectionConstructor<T>) {}
  async connect(options: ConnectOptions = {}): Promise<T> {
    if (options.accessToken !== undefined && options.tokenProvider !== undefined) {
      throw new WebSocketAuthenticationError('Supply either accessToken or tokenProvider, not both');
    }
    let provider: TokenProvider;
    if (options.accessToken !== undefined) {
      if (typeof options.accessToken !== 'string' || !options.accessToken.trim()) throw new WebSocketAuthenticationError('accessToken must be a non-empty string');
      provider = new StaticTokenProvider(options.accessToken);
    } else if (options.tokenProvider) {
      provider = typeof options.tokenProvider === 'function' ? new CallbackTokenProvider(options.tokenProvider) : options.tokenProvider;
    } else {
      const security = typeof this.options.security === 'function' ? await this.options.security() : this.options.security;
      if (!security?.clientID || !security.clientSecret) throw new WebSocketAuthenticationError('Supply accessToken or tokenProvider, or configure security.clientID and security.clientSecret');
      provider = new ClientCredentialsTokenProvider(security.tokenURL ?? 'https://api.aries.com/v1/oauth2/token', security.clientID, security.clientSecret);
    }
    const connection = new this.Connection(options.url ?? this.endpoint, provider, new WebSocketConfig(options.config), options.webSocketFactory);
    return connection.connect();
  }
}
/** Endpoint factories share the generated SDK security configuration. */
export class WebSocketSDK {
  readonly market: WebSocketResource<MarketConnection>;
  readonly chart: WebSocketResource<ChartConnection>;
  readonly account: WebSocketResource<AccountConnection>;
  constructor(options: SDKOptions = {}) {
    this.market = new WebSocketResource(MARKET_URL, options, MarketConnection);
    this.chart = new WebSocketResource(CHART_URL, options, ChartConnection);
    this.account = new WebSocketResource(ACCOUNT_URL, options, AccountConnection);
  }
}
