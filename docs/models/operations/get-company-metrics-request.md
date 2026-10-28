# GetCompanyMetricsRequest

## Example Usage

```typescript
import { GetCompanyMetricsRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetCompanyMetricsRequest = {
  symbol: "AAPL",
  metric: "all",
};
```

## Fields

| Field                                                                                                               | Type                                                                                                                | Required                                                                                                            | Description                                                                                                         | Example                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                            | *string*                                                                                                            | :heavy_check_mark:                                                                                                  | Stock ticker symbol to research, such as AAPL.                                                                      | AAPL                                                                                                                |
| `metric`                                                                                                            | [operations.Metric](../../models/operations/metric.md)                                                              | :heavy_check_mark:                                                                                                  | Which metric group to return. Currently only `all` is supported — it returns every available metric for the symbol. | all                                                                                                                 |