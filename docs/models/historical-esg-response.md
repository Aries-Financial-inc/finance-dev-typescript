# HistoricalEsgResponse

Historical ESG (environmental, social, governance) scores and disclosures for a company by period.

## Example Usage

```typescript
import { HistoricalEsgResponse } from "finance-dev/models";

let value: HistoricalEsgResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [models.HistoricalEsgResponseData](../models/historical-esg-response-data.md)[] | :heavy_minus_sign:                                                              | ESG records by period.                                                          |
| `symbol`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Ticker symbol of the company.                                                   |