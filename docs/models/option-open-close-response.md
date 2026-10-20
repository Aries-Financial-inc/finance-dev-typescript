# OptionOpenCloseResponse

Daily open, high, low, close and volume for an option contract on a given date, including pre-market and after-hours prices.

## Example Usage

```typescript
import { OptionOpenCloseResponse } from "finance-dev/models";

let value: OptionOpenCloseResponse = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `afterHours`                                        | *number*                                            | :heavy_minus_sign:                                  | Last traded price in after-hours session            |
| `close`                                             | *number*                                            | :heavy_minus_sign:                                  | Closing price for the trading session               |
| `date`                                              | *string*                                            | :heavy_minus_sign:                                  | Trade date in YYYY-MM-DD format                     |
| `high`                                              | *number*                                            | :heavy_minus_sign:                                  | Highest price reached during the trading session    |
| `low`                                               | *number*                                            | :heavy_minus_sign:                                  | Lowest price reached during the trading session     |
| `open`                                              | *number*                                            | :heavy_minus_sign:                                  | Opening price for the trading session               |
| `preMarket`                                         | *number*                                            | :heavy_minus_sign:                                  | Last traded price in pre-market session             |
| `ticker`                                            | *string*                                            | :heavy_minus_sign:                                  | OCC option ticker symbol                            |
| `volume`                                            | *number*                                            | :heavy_minus_sign:                                  | Total number of contracts traded during the session |