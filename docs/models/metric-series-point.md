# MetricSeriesPoint

Single data point of a company metric time series.

## Example Usage

```typescript
import { MetricSeriesPoint } from "finance-dev/models";

let value: MetricSeriesPoint = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `period`                                            | *string*                                            | :heavy_minus_sign:                                  | Time period for the metric value (e.g., 2023-12-31) |
| `v`                                                 | *number*                                            | :heavy_minus_sign:                                  | Metric value for the period                         |