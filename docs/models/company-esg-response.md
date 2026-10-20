# CompanyEsgResponse

Latest ESG (environmental, social, governance) scores and disclosures for a company.

## Example Usage

```typescript
import { CompanyEsgResponse } from "finance-dev/models";

let value: CompanyEsgResponse = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `data`                                                                  | [models.CompanyEsgResponseData](../models/company-esg-response-data.md) | :heavy_minus_sign:                                                      | Detailed ESG disclosures and metrics.                                   |
| `environmentScore`                                                      | *number*                                                                | :heavy_minus_sign:                                                      | Environmental score.                                                    |
| `governanceScore`                                                       | *number*                                                                | :heavy_minus_sign:                                                      | Governance score.                                                       |
| `socialScore`                                                           | *number*                                                                | :heavy_minus_sign:                                                      | Social score.                                                           |
| `symbol`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Ticker symbol of the company.                                           |
| `totalESGScore`                                                         | *number*                                                                | :heavy_minus_sign:                                                      | Total ESG score.                                                        |