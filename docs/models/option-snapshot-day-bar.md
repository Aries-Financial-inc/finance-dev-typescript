# OptionSnapshotDayBar

Most recent daily OHLCV bar for the contract (`OptionSnapshotDayBarDTO`).

## Example Usage

```typescript
import { OptionSnapshotDayBar } from "@ariesdotcom/finance-dev/models";

let value: OptionSnapshotDayBar = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `change`                                                                             | *number*                                                                             | :heavy_minus_sign:                                                                   | Price change for the day                                                             |
| `changePercent`                                                                      | *number*                                                                             | :heavy_minus_sign:                                                                   | Percentage price change for the day                                                  |
| `close`                                                                              | *number*                                                                             | :heavy_minus_sign:                                                                   | Closing price for the day                                                            |
| `high`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | Highest price for the day                                                            |
| `lastUpdated`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | Timestamp of the last update to the day bar, as supplied by the market data provider |
| `low`                                                                                | *number*                                                                             | :heavy_minus_sign:                                                                   | Lowest price for the day                                                             |
| `open`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | Opening price for the day                                                            |
| `previousClose`                                                                      | *number*                                                                             | :heavy_minus_sign:                                                                   | Previous day's closing price                                                         |
| `volume`                                                                             | *number*                                                                             | :heavy_minus_sign:                                                                   | Trading volume for the day                                                           |
| `vwap`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | Volume-weighted average price for the day                                            |