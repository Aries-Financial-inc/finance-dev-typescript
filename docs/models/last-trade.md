# LastTrade

Last trade information

## Example Usage

```typescript
import { LastTrade } from "@ariesdotcom/finance-dev/models";

let value: LastTrade = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `conditions`                                                          | *number*[]                                                            | :heavy_minus_sign:                                                    | Provider-defined numeric condition codes attached to the last trade.  |
| `exchangeId`                                                          | *number*                                                              | :heavy_minus_sign:                                                    | Numeric identifier of the exchange where the last trade occurred.     |
| `price`                                                               | *number*                                                              | :heavy_minus_sign:                                                    | Price of the last trade.                                              |
| `size`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | Size of the last trade.                                               |
| `timestamp`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp of the last trade as an integer from the upstream provider. |
| `tradeId`                                                             | *string*                                                              | :heavy_minus_sign:                                                    | Identifier of the last trade.                                         |