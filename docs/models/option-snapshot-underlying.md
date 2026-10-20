# OptionSnapshotUnderlying

Underlying equity snapshot (`OptionSnapshotUnderlyingDTO`).

## Example Usage

```typescript
import { OptionSnapshotUnderlying } from "finance-dev/models";

let value: OptionSnapshotUnderlying = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `changeToBreakEven`                                                                           | *number*                                                                                      | :heavy_minus_sign:                                                                            | Change in the underlying price needed for the contract to reach break-even                    |
| `lastUpdated`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Timestamp of the last update to the underlying price, as supplied by the market data provider |
| `price`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | Current price of the underlying asset                                                         |
| `ticker`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Ticker symbol of the underlying asset                                                         |
| `timeframe`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Data timeframe of the underlying price, as supplied by the market data provider               |