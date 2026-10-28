# OptionTradesResponseResult

## Example Usage

```typescript
import { OptionTradesResponseResult } from "@ariesdotcom/finance-dev/models";

let value: OptionTradesResponseResult = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `conditions`                                                      | *number*[]                                                        | :heavy_minus_sign:                                                | Trade conditions                                                  |
| `correction`                                                      | *number*                                                          | :heavy_minus_sign:                                                | Correction indicator                                              |
| `exchange`                                                        | *number*                                                          | :heavy_minus_sign:                                                | Numeric exchange identifier supplied by the market data provider. |
| `participantTimestamp`                                            | *number*                                                          | :heavy_minus_sign:                                                | Participant timestamp (nanoseconds)                               |
| `price`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Trade price                                                       |
| `sipTimestamp`                                                    | *number*                                                          | :heavy_minus_sign:                                                | SIP timestamp (nanoseconds)                                       |
| `size`                                                            | *number*                                                          | :heavy_minus_sign:                                                | Trade size (contracts)                                            |