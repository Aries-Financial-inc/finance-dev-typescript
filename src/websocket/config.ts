import { WebSocketConfigurationError } from './errors.js';

export const MARKET_URL = 'wss://api.aries.com/v1/market/ws';
export const CHART_URL = 'wss://api.aries.com/v1/charts/ws';
export const ACCOUNT_URL = 'wss://api.aries.com/v1/accounts/ws';

/** All durations are milliseconds. */
export class WebSocketConfig {
  readonly connectTimeout: number = 10_000;
  readonly authTimeout: number = 4_000;
  readonly requestTimeout: number = 10_000;
  readonly pingInterval: number = 30_000;
  readonly pongTimeout: number = 10_000;
  readonly closeTimeout: number = 10_000;
  readonly reconnect: boolean = true;
  readonly replaySubscriptions: boolean = true;
  readonly reconnectInitialDelay: number = 1_000;
  readonly reconnectMaxDelay: number = 60_000;
  readonly reconnectJitter: number = 0.2;
  readonly incomingQueueSize: number = 1_000;
  readonly maxMessageSize: number = 1_048_576;

  constructor(options: Partial<WebSocketConfig> = {}) {
    Object.assign(this, options);
    for (const key of ['connectTimeout', 'authTimeout', 'requestTimeout', 'pingInterval',
      'pongTimeout', 'closeTimeout', 'reconnectInitialDelay', 'reconnectMaxDelay'] as const) {
      if (!Number.isFinite(this[key]) || this[key] <= 0) {
        throw new WebSocketConfigurationError(`${key} must be positive`);
      }
    }
    if (this.reconnectMaxDelay < this.reconnectInitialDelay) {
      throw new WebSocketConfigurationError('reconnectMaxDelay must be at least reconnectInitialDelay');
    }
    if (!Number.isFinite(this.reconnectJitter) || this.reconnectJitter < 0 || this.reconnectJitter > 1) {
      throw new WebSocketConfigurationError('reconnectJitter must be between 0 and 1');
    }
    for (const key of ['incomingQueueSize', 'maxMessageSize'] as const) {
      if (!Number.isSafeInteger(this[key]) || this[key] < 1) {
        throw new WebSocketConfigurationError(`${key} must be a positive integer`);
      }
    }
    for (const key of ['reconnect', 'replaySubscriptions'] as const) {
      if (typeof this[key] !== 'boolean') throw new WebSocketConfigurationError(`${key} must be boolean`);
    }
    Object.freeze(this);
  }
}
