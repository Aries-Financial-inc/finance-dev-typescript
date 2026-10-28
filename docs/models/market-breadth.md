# MarketBreadth

Market breadth snapshot showing how many symbols are rising, falling, or unchanged. Use it to summarize overall market participation.

## Example Usage

```typescript
import { MarketBreadth } from "@ariesdotcom/finance-dev/models";

let value: MarketBreadth = {
  advanceDeclineRatio: 1.85,
  advancers: 2840,
  advancersPercent: 62.5,
  decliners: 1532,
  declinersPercent: 33.7,
  timestamp: "2026-03-09T13:48:11.726532Z",
  totalSymbols: 4544,
  unchanged: 172,
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `advanceDeclineRatio`                                                                                          | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Ratio of advancers to decliners                                                                                |
| `advancers`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Number of advancing stocks                                                                                     |
| `advancersPercent`                                                                                             | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Percentage of tracked symbols that are advancing. Use this to show how broad the market move is.               |
| `decliners`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Number of declining stocks                                                                                     |
| `declinersPercent`                                                                                             | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Percentage of tracked symbols that are declining. Use this with advancers percent for market breadth displays. |
| `timestamp`                                                                                                    | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Data timestamp in ISO 8601 format; fractional seconds may be present (for example microseconds).               |
| `totalSymbols`                                                                                                 | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Total number of symbols included in the breadth calculation.                                                   |
| `unchanged`                                                                                                    | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Number of unchanged stocks                                                                                     |