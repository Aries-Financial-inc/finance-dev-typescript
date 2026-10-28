# EarningsQualityScoreResponseData

## Example Usage

```typescript
import { EarningsQualityScoreResponseData } from "@ariesdotcom/finance-dev/models";

let value: EarningsQualityScoreResponseData = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `cashGenerationCapitalAllocation`                       | *number*                                                | :heavy_minus_sign:                                      | Cash generation and capital allocation component score. |
| `growth`                                                | *number*                                                | :heavy_minus_sign:                                      | Growth component score.                                 |
| `letterScore`                                           | *string*                                                | :heavy_minus_sign:                                      | Letter grade equivalent of the total score.             |
| `leverage`                                              | *number*                                                | :heavy_minus_sign:                                      | Leverage component score.                               |
| `period`                                                | *string*                                                | :heavy_minus_sign:                                      | Reporting period the score applies to.                  |
| `profitability`                                         | *number*                                                | :heavy_minus_sign:                                      | Profitability component score.                          |
| `score`                                                 | *number*                                                | :heavy_minus_sign:                                      | Total earnings quality score.                           |