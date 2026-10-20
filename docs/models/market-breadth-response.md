# MarketBreadthResponse

Response envelope for the market breadth endpoint.

## Example Usage

```typescript
import { MarketBreadthResponse } from "finance-dev/models";

let value: MarketBreadthResponse = {
  data: {
    advanceDeclineRatio: 1.85,
    advancers: 2840,
    advancersPercent: 62.5,
    decliners: 1532,
    declinersPercent: 33.7,
    timestamp: "2026-03-09T13:48:11.726532Z",
    totalSymbols: 4544,
    unchanged: 172,
  },
};
```

## Fields

| Field                                                                                                                                                                                                         | Type                                                                                                                                                                                                          | Required                                                                                                                                                                                                      | Description                                                                                                                                                                                                   | Example                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                        | [models.MarketBreadth](../models/market-breadth.md)                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                            | Market breadth snapshot showing how many symbols are rising, falling, or unchanged. Use it to summarize overall market participation.                                                                         | {<br/>"advanceDeclineRatio": 1.85,<br/>"advancers": 2840,<br/>"advancersPercent": 62.5,<br/>"decliners": 1532,<br/>"declinersPercent": 33.7,<br/>"timestamp": "2026-03-09T13:48:11.726532Z",<br/>"totalSymbols": 4544,<br/>"unchanged": 172<br/>} |
| `success`                                                                                                                                                                                                     | *boolean*                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                            | Always true on a successful response.                                                                                                                                                                         |                                                                                                                                                                                                               |