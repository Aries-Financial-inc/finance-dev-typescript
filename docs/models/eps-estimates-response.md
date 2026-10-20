# EpsEstimatesResponse

Analyst consensus EPS estimates for a stock by reporting period, sourced from Finnhub.

## Example Usage

```typescript
import { EpsEstimatesResponse } from "finance-dev/models";

let value: EpsEstimatesResponse = {
  epsEstimates: {
    freq: "quarterly",
  },
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `epsEstimates`                                    | [models.EpsEstimates](../models/eps-estimates.md) | :heavy_minus_sign:                                | EPS estimates container for the symbol            |