# ChartBar

## Example Usage

```typescript
import { ChartBar } from "@ariesdotcom/finance-dev/models";

let value: ChartBar = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `adjustmentRatio`                                    | *number*                                             | :heavy_minus_sign:                                   | Price adjustment ratio for corporate actions         |
| `close`                                              | *number*                                             | :heavy_minus_sign:                                   | Closing index value for the bar period               |
| `currency`                                           | *string*                                             | :heavy_minus_sign:                                   | Currency of the bar data                             |
| `endDate`                                            | *string*                                             | :heavy_minus_sign:                                   | Bar end date in MM/DD/YYYY format                    |
| `endTime`                                            | *string*                                             | :heavy_minus_sign:                                   | Bar end time in HH:MM:SS AM/PM format                |
| `high`                                               | *number*                                             | :heavy_minus_sign:                                   | Highest index value during the bar period            |
| `low`                                                | *number*                                             | :heavy_minus_sign:                                   | Lowest index value during the bar period             |
| `open`                                               | *number*                                             | :heavy_minus_sign:                                   | Opening index value for the bar period               |
| `session`                                            | *string*                                             | :heavy_minus_sign:                                   | Trading session type (Market, PreMarket, PostMarket) |
| `startDate`                                          | *string*                                             | :heavy_minus_sign:                                   | Bar start date in MM/DD/YYYY format                  |
| `startTime`                                          | *string*                                             | :heavy_minus_sign:                                   | Bar start time in HH:MM:SS AM/PM format              |
| `trades`                                             | *number*                                             | :heavy_minus_sign:                                   | Number of trades during the bar period               |
| `twap`                                               | *number*                                             | :heavy_minus_sign:                                   | Time-Weighted Average Price for the bar period       |
| `utcOffset`                                          | *number*                                             | :heavy_minus_sign:                                   | UTC time offset in hours                             |
| `volume`                                             | *number*                                             | :heavy_minus_sign:                                   | Trading volume during the bar period                 |
| `vwap`                                               | *number*                                             | :heavy_minus_sign:                                   | Volume-Weighted Average Price for the bar period     |