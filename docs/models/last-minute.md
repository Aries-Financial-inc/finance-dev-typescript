# LastMinute

Last minute aggregate

## Example Usage

```typescript
import { LastMinute } from "finance-dev/models";

let value: LastMinute = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `close`                                                     | *number*                                                    | :heavy_minus_sign:                                          | Close price of the last minute aggregate.                   |
| `high`                                                      | *number*                                                    | :heavy_minus_sign:                                          | High price of the last minute aggregate.                    |
| `low`                                                       | *number*                                                    | :heavy_minus_sign:                                          | Low price of the last minute aggregate.                     |
| `open`                                                      | *number*                                                    | :heavy_minus_sign:                                          | Open price of the last minute aggregate.                    |
| `transactions`                                              | *number*                                                    | :heavy_minus_sign:                                          | Number of transactions in the last minute aggregate.        |
| `volume`                                                    | *number*                                                    | :heavy_minus_sign:                                          | Trading volume in the last minute aggregate.                |
| `vwap`                                                      | *number*                                                    | :heavy_minus_sign:                                          | Volume-weighted average price of the last minute aggregate. |