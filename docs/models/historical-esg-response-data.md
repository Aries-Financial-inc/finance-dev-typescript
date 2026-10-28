# HistoricalEsgResponseData

## Example Usage

```typescript
import { HistoricalEsgResponseData } from "@ariesdotcom/finance-dev/models";

let value: HistoricalEsgResponseData = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `data`                                                                                 | [models.HistoricalEsgResponseDataData](../models/historical-esg-response-data-data.md) | :heavy_minus_sign:                                                                     | Detailed ESG disclosures and metrics for the period.                                   |
| `environmentScore`                                                                     | *number*                                                                               | :heavy_minus_sign:                                                                     | Environmental score for the period.                                                    |
| `governanceScore`                                                                      | *number*                                                                               | :heavy_minus_sign:                                                                     | Governance score for the period.                                                       |
| `period`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Reporting period of the record.                                                        |
| `socialScore`                                                                          | *number*                                                                               | :heavy_minus_sign:                                                                     | Social score for the period.                                                           |
| `totalESGScore`                                                                        | *number*                                                                               | :heavy_minus_sign:                                                                     | Total ESG score for the period.                                                        |