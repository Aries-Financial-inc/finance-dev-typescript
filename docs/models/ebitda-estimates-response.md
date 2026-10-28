# EbitdaEstimatesResponse

Analyst consensus EBITDA estimates for a stock by reporting period, sourced from Finnhub.

## Example Usage

```typescript
import { EbitdaEstimatesResponse } from "@ariesdotcom/finance-dev/models";

let value: EbitdaEstimatesResponse = {
  ebitdaEstimates: {
    freq: "quarterly",
  },
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `ebitdaEstimates`                                       | [models.EbitdaEstimates](../models/ebitda-estimates.md) | :heavy_minus_sign:                                      | EBITDA estimates container for the symbol               |