# StockTradesResponseResult

## Example Usage

```typescript
import { StockTradesResponseResult } from "finance-dev/models";

let value: StockTradesResponseResult = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `conditions`                                                      | *number*[]                                                        | :heavy_minus_sign:                                                | Trade conditions                                                  |
| `correction`                                                      | *number*                                                          | :heavy_minus_sign:                                                | Correction indicator                                              |
| `exchange`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Numeric exchange identifier supplied by the market data provider. |
| `id`                                                              | *string*                                                          | :heavy_minus_sign:                                                | Trade ID                                                          |
| `participantTimestamp`                                            | *number*                                                          | :heavy_minus_sign:                                                | Participant timestamp (nanoseconds)                               |
| `price`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Trade price                                                       |
| `sequenceNumber`                                                  | *number*                                                          | :heavy_minus_sign:                                                | Sequence number                                                   |
| `sipTimestamp`                                                    | *number*                                                          | :heavy_minus_sign:                                                | SIP timestamp (nanoseconds)                                       |
| `size`                                                            | *number*                                                          | :heavy_minus_sign:                                                | Trade size (shares)                                               |
| `tape`                                                            | *number*                                                          | :heavy_minus_sign:                                                | Tape                                                              |
| `trfId`                                                           | *number*                                                          | :heavy_minus_sign:                                                | TRF ID                                                            |
| `trfTimestamp`                                                    | *number*                                                          | :heavy_minus_sign:                                                | TRF timestamp                                                     |