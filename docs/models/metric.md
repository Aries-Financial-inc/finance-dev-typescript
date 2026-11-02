# Metric

Current financial metrics and ratios (dynamic object with various metric keys)

## Example Usage

```typescript
import { Metric } from "@ariesdotcom/finance-dev/models";

let value: Metric = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `tenDayAverageTradingVolume`                                         | *number*                                                             | :heavy_minus_sign:                                                   | Average daily trading volume over the last 10 days                   |
| `fiftyTwoWeekHigh`                                                   | *number*                                                             | :heavy_minus_sign:                                                   | Highest stock price in the last 52 weeks                             |
| `fiftyTwoWeekLow`                                                    | *number*                                                             | :heavy_minus_sign:                                                   | Lowest stock price in the last 52 weeks                              |
| `fiftyTwoWeekLowDate`                                                | *string*                                                             | :heavy_minus_sign:                                                   | Date when the 52-week low was reached                                |
| `fiftyTwoWeekPriceReturnDaily`                                       | *number*                                                             | :heavy_minus_sign:                                                   | Price return over the last 52 weeks (daily calculation)              |
| `beta`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | Stock's beta coefficient measuring volatility relative to the market |
| `fiftyTwoWeekHighDate`                                               | *string*                                                             | :heavy_minus_sign:                                                   | Date when the 52-week high was reached                               |
| `additionalProperties`                                               | Record<string, *models.MetricUnion*>                                 | :heavy_minus_sign:                                                   | N/A                                                                  |