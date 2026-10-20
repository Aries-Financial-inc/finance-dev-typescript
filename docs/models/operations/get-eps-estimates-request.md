# GetEpsEstimatesRequest

## Example Usage

```typescript
import { GetEpsEstimatesRequest } from "finance-dev/models/operations";

let value: GetEpsEstimatesRequest = {
  symbol: "AAPL",
  freq: "quarterly",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                            | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Stock ticker to query. Send the plain uppercase symbol exactly as you'd type it on a brokerage screen, e.g. `AAPL`, `MSFT`, `TSLA`. | AAPL                                                                                                                                |
| `freq`                                                                                                                              | [models.ReportingFrequency](../../models/reporting-frequency.md)                                                                    | :heavy_minus_sign:                                                                                                                  | (Optional) Frequency: annual, quarterly                                                                                             | quarterly                                                                                                                           |