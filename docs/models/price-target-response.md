# PriceTargetResponse

Analyst price target consensus for a stock (high, low, mean, median and analyst count), sourced from Finnhub.

## Example Usage

```typescript
import { PriceTargetResponse } from "@ariesdotcom/finance-dev/models";

let value: PriceTargetResponse = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `lastUpdated`                                               | *string*                                                    | :heavy_minus_sign:                                          | Time the consensus was last updated, as reported by Finnhub |
| `numberAnalysts`                                            | *number*                                                    | :heavy_minus_sign:                                          | Number of analysts contributing to the consensus            |
| `symbol`                                                    | *string*                                                    | :heavy_minus_sign:                                          | Stock ticker symbol                                         |
| `targetHigh`                                                | *number*                                                    | :heavy_minus_sign:                                          | Highest analyst price target                                |
| `targetLow`                                                 | *number*                                                    | :heavy_minus_sign:                                          | Lowest analyst price target                                 |
| `targetMean`                                                | *number*                                                    | :heavy_minus_sign:                                          | Mean analyst price target                                   |
| `targetMedian`                                              | *number*                                                    | :heavy_minus_sign:                                          | Median analyst price target                                 |