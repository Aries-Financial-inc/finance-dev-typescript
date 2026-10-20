# Min

Latest minute aggregate

## Example Usage

```typescript
import { Min } from "finance-dev/models";

let value: Min = {};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `accumulatedVolume`                                                          | *number*                                                                     | :heavy_minus_sign:                                                           | Accumulated volume for the trading day up to this minute bar.                |
| `close`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | Close price of the latest minute bar.                                        |
| `high`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | High price of the latest minute bar.                                         |
| `low`                                                                        | *number*                                                                     | :heavy_minus_sign:                                                           | Low price of the latest minute bar.                                          |
| `numberOfTrades`                                                             | *number*                                                                     | :heavy_minus_sign:                                                           | Number of trades in the latest minute bar.                                   |
| `open`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | Open price of the latest minute bar.                                         |
| `timestamp`                                                                  | *number*                                                                     | :heavy_minus_sign:                                                           | Timestamp of the latest minute bar as an integer from the upstream provider. |
| `volume`                                                                     | *number*                                                                     | :heavy_minus_sign:                                                           | Trading volume in the latest minute bar.                                     |
| `vwap`                                                                       | *number*                                                                     | :heavy_minus_sign:                                                           | Volume-weighted average price of the latest minute bar.                      |