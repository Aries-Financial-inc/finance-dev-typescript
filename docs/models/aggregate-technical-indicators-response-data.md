# AggregateTechnicalIndicatorsResponseData

Aggregate indicators payload.

## Example Usage

```typescript
import { AggregateTechnicalIndicatorsResponseData } from "@ariesdotcom/finance-dev/models";

let value: AggregateTechnicalIndicatorsResponseData = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `technicalAnalysis`                                         | [models.TechnicalAnalysis](../models/technical-analysis.md) | :heavy_minus_sign:                                          | Aggregate technical analysis summary.                       |
| `trend`                                                     | [models.Trend](../models/trend.md)                          | :heavy_minus_sign:                                          | Trend strength information.                                 |