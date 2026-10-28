# RevenueEstimatesResponse

Analyst consensus revenue estimates for a stock by reporting period, sourced from Finnhub.

## Example Usage

```typescript
import { RevenueEstimatesResponse } from "@ariesdotcom/finance-dev/models";

let value: RevenueEstimatesResponse = {
  revenueEstimates: {
    freq: "quarterly",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `revenueEstimates`                                        | [models.RevenueEstimates](../models/revenue-estimates.md) | :heavy_minus_sign:                                        | revenue estimates container for the symbol                |