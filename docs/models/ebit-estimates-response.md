# EbitEstimatesResponse

Analyst consensus EBIT estimates for a stock by reporting period, sourced from Finnhub.

## Example Usage

```typescript
import { EbitEstimatesResponse } from "@ariesdotcom/finance-dev/models";

let value: EbitEstimatesResponse = {
  ebitEstimates: {
    freq: "quarterly",
  },
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `ebitEstimates`                                     | [models.EbitEstimates](../models/ebit-estimates.md) | :heavy_minus_sign:                                  | EBIT estimates container for the symbol             |