# Annual

Annual financial metrics organized by type

## Example Usage

```typescript
import { Annual } from "finance-dev/models";

let value: Annual = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `currentRatio`                                                        | [models.MetricSeriesPoint](../models/metric-series-point.md)[]        | :heavy_minus_sign:                                                    | Current ratio values over time (current assets / current liabilities) |
| `netMargin`                                                           | [models.MetricSeriesPoint](../models/metric-series-point.md)[]        | :heavy_minus_sign:                                                    | Net profit margin values over time                                    |
| `salesPerShare`                                                       | [models.MetricSeriesPoint](../models/metric-series-point.md)[]        | :heavy_minus_sign:                                                    | Sales per share values over time                                      |