# OptionSnapshotLastQuote

Latest NBBO quote when included (`OptionSnapshotLastQuoteDTO`).

## Example Usage

```typescript
import { OptionSnapshotLastQuote } from "@ariesdotcom/finance-dev/models";

let value: OptionSnapshotLastQuote = {};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `ask`                                                                                       | *number*                                                                                    | :heavy_minus_sign:                                                                          | Ask price                                                                                   |
| `askExchange`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | Numeric identifier of the exchange quoting the ask, as supplied by the market data provider |
| `askSize`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | Size at the ask price                                                                       |
| `bid`                                                                                       | *number*                                                                                    | :heavy_minus_sign:                                                                          | Bid price                                                                                   |
| `bidExchange`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | Numeric identifier of the exchange quoting the bid, as supplied by the market data provider |
| `bidSize`                                                                                   | *number*                                                                                    | :heavy_minus_sign:                                                                          | Size at the bid price                                                                       |
| `lastUpdated`                                                                               | *number*                                                                                    | :heavy_minus_sign:                                                                          | Timestamp of the last quote update, as supplied by the market data provider                 |
| `midpoint`                                                                                  | *number*                                                                                    | :heavy_minus_sign:                                                                          | Midpoint between the bid and ask prices                                                     |
| `timeframe`                                                                                 | *string*                                                                                    | :heavy_minus_sign:                                                                          | Data timeframe of the quote, as supplied by the market data provider                        |