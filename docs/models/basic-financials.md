# BasicFinancials

Basic financial metrics for company research. Use these values for valuation, profitability, and balance-sheet trend displays.

## Example Usage

```typescript
import { BasicFinancials } from "@ariesdotcom/finance-dev/models";

let value: BasicFinancials = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `metric`                                                                                                          | [models.Metric](../models/metric.md)                                                                              | :heavy_minus_sign:                                                                                                | Current financial metrics and ratios (dynamic object with various metric keys)                                    |
| `metricType`                                                                                                      | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Type of metrics returned (all, price, valuation, margin)                                                          |
| `series`                                                                                                          | [models.Series](../models/series.md)                                                                              | :heavy_minus_sign:                                                                                                | Time series data for various financial metrics                                                                    |
| `symbol`                                                                                                          | *string*                                                                                                          | :heavy_minus_sign:                                                                                                | Stock ticker symbol these financial metrics belong to. Use it to match the metrics back to the requested company. |