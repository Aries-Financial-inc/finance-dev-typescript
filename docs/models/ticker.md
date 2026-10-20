# Ticker

## Example Usage

```typescript
import { Ticker } from "finance-dev/models";

let value: Ticker = {};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `day`                                       | [models.Day](../models/day.md)              | :heavy_minus_sign:                          | Current day aggregate                       |
| `lastQuote`                                 | [models.LastQuote](../models/last-quote.md) | :heavy_minus_sign:                          | Last quote information                      |
| `lastTrade`                                 | [models.LastTrade](../models/last-trade.md) | :heavy_minus_sign:                          | Last trade information                      |
| `min`                                       | [models.Min](../models/min.md)              | :heavy_minus_sign:                          | Latest minute aggregate                     |
| `prevDay`                                   | [models.PrevDay](../models/prev-day.md)     | :heavy_minus_sign:                          | Previous day aggregate                      |
| `ticker`                                    | *string*                                    | :heavy_minus_sign:                          | Ticker symbol                               |
| `todaysChange`                              | *number*                                    | :heavy_minus_sign:                          | Today's change                              |
| `todaysChangePerc`                          | *number*                                    | :heavy_minus_sign:                          | Today's change percent                      |
| `updated`                                   | *number*                                    | :heavy_minus_sign:                          | Last updated timestamp                      |