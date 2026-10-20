/** Wire names are preserved; unknown fields survive decoding. */
export interface WireObject { [key: string]: unknown; }
export interface WireMessage extends WireObject { type: string; id?: string; payload?: unknown; }
export interface UnknownMessage { original: WireObject; }
export type InboundMessage = WireMessage | UnknownMessage;
export interface RequestMessage extends WireMessage { type: 'request'; id: string; payload: WireObject; }
export interface ResponseMessage extends WireMessage { type: 'response'; payload: WireObject; }
export interface EventMessage<T = WireObject> extends WireMessage { type: 'event'; payload: T; }
export interface SubscribedMessage extends WireMessage { type: 'subscribed'; payload: WireObject; }
export interface MarketSubscription extends WireObject {
  symbol: string; symbolType?: string; quoteFields?: string[] | string;
  tradeFields?: string[] | string; level2?: boolean; timeAndSales?: boolean;
  timeAndSalesFields?: string[] | string; greeksFields?: string[] | string;
}
export interface MarketUnsubscribe extends WireObject {
  symbol: string; quote?: boolean; trade?: boolean; level2?: boolean;
  timeAndSales?: boolean; greeks?: boolean;
  quoteFields?: string[]; tradeFields?: string[]; greeksFields?: string[];
}
export interface MarketEvent extends WireObject { type?: string; action?: string; symbol?: string; data?: unknown; }
export interface QuoteData extends WireObject {
  bidPrice?: number; bidChange?: number; bidSize?: number; bidSizeChange?: number;
  bidTimestamp?: number; bidExchange?: string; askPrice?: number; askChange?: number;
  askSize?: number; askSizeChange?: number; askTimestamp?: number; askExchange?: string;
  quoteTimestamp?: number; midPrice?: number; spread?: number;
}
export interface TradeData extends WireObject {
  price?: number; size?: number; totalVolume?: number; tickVolume?: number;
  openPrice?: number; highPrice?: number; lowPrice?: number; lastPrice?: number;
  netChange?: number; tick?: string; tradeSeq?: number; tradeTimestamp?: number;
  closePrice?: number; previousClosePrice?: number;
}
export interface TimeAndSalesData extends WireObject {
  symbol?: string; price?: string; size?: string; tick?: string;
  tradeSeq?: string; tradeExchange?: string; tradeTimestamp?: string;
}
export interface Level2Data extends WireObject { orderBook?: unknown; quotes?: unknown; }
export function parseLevel2Row(row: string, separator = ','): string[] { return row.split(separator); }
export type GreeksData = WireObject;
export interface ChartSubscription extends WireObject { symbol: string; type?: string; symbolType?: string; }
export interface ChartEvent extends WireObject { symbol?: string; data?: unknown; }
export interface TradingViewQuoteValues extends WireObject {
  ch?: number; chp?: number; lp?: number; ask?: number; bid?: number; open_price?: number;
  high_price?: number; low_price?: number; prev_close_price?: number; volume?: number;
  exchange?: string; short_name?: string;
}
export interface TradingViewQuote extends WireObject { s?: string; n?: string; v?: TradingViewQuoteValues; }
export interface TradingViewTrade extends WireObject { s?: string; t?: number; lp?: number; v?: number; }
export interface AccountSubscription { accountId: string; }
export type PnlInterval = '15s' | '1m' | '5m' | '15m' | '1h' | '1d' | '1mo';
export interface PnlSubscription extends AccountSubscription { startTime: string | Date; interval?: PnlInterval; }
export interface NewsSubscription extends WireObject { symbols?: string[]; topics?: string[]; }
export interface AccountSnapshot extends WireObject { account: WireObject; positions: WireObject[]; ordersV2: WireObject[]; }
export interface AccountEvent extends WireObject { topic: 'account'; name: string; target?: string; data: WireObject; }
export interface PnlEvent extends WireObject { topic: 'pnl'; data: WireObject; }
export interface TopicEvent extends WireObject { topic: string; data: WireObject[]; }
