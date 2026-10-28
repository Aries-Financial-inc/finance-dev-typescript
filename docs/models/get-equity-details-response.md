# GetEquityDetailsResponse

Wrapper for GET /v1/marketdata/equities/details: `data` for successful symbols, `errors` when applicable.

## Example Usage

```typescript
import { GetEquityDetailsResponse } from "@ariesdotcom/finance-dev/models";

let value: GetEquityDetailsResponse = {
  data: [
    {
      eps3YearGrowthRate: 17.6111,
      eps5YearGrowthRate: 11.0713,
      epsDiluted: 2.84,
      epsLatest12Month: 18.3333,
      pe: 32.181,
      askExchange: "BATS|BATS Trading",
      askPrice: 268,
      askSize: 500,
      assets: 379297000,
      avgVolume4Weeks: 38174153,
      bidExchange: "EDGX|Direct Edge X",
      bidPrice: 267.5,
      bidSize: 1400,
      closePrice: 273.43,
      dividend: 0.26,
      hasOptions: true,
      high52WeekDate: "2025-12-03T00:00:00Z",
      high52WeekPrice: 288.62,
      highPrice: 273.06,
      instrumentType: "Equity",
      isETF: false,
      lastPrice: 271.06,
      liabilities: 291107000,
      longTermDebt: 905090000,
      low52WeekDate: "2025-04-08",
      low52WeekPrice: 169.2101,
      lowPrice: 269.65,
      marketCap: 30064771072,
      midPrice: 267.75,
      name: "Apple Inc.",
      netChange: -3.53,
      openPrice: 272.78,
      price: 267.53,
      quoteTimestamp: new Date("2026-04-27T05:38:09.901000-04:00"),
      sharesOutstanding: 14681140,
      shortSaleRestricted: 0,
      sicCode: 3663,
      size: 1,
      spread: 0.5,
      symbol: "AAPL",
      tick: 0,
      totalVolume: 300562,
      tradeExchange: "PACF|NYSE ARCA (Pacific)",
      tradeSeq: 1009904,
      tradeTimestamp: new Date("2026-04-27T05:38:10.674000-04:00"),
      type: "ETRADE",
    },
  ],
  errors: [],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [models.EquityDetailsDTO](../models/equity-details-dto.md)[]                  | :heavy_minus_sign:                                                            | Symbols that returned a non-empty snapshot with valid quote data              |
| `errors`                                                                      | [models.SymbolError](../models/symbol-error.md)[]                             | :heavy_minus_sign:                                                            | Per-symbol error entries when a requested symbol cannot be included in `data` |