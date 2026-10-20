# ReportedFiling

SEC filing with its reporting period and reported financial data.

## Example Usage

```typescript
import { ReportedFiling } from "finance-dev/models";

let value: ReportedFiling = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `acceptedDate`                                          | *string*                                                | :heavy_minus_sign:                                      | Date and time when the SEC accepted the filing          |
| `accessNumber`                                          | *string*                                                | :heavy_minus_sign:                                      | SEC accession number uniquely identifying the filing    |
| `cik`                                                   | *string*                                                | :heavy_minus_sign:                                      | Central Index Key assigned by the SEC to the company    |
| `endDate`                                               | *string*                                                | :heavy_minus_sign:                                      | End date of the reporting period in YYYY-MM-DD format   |
| `filedDate`                                             | *string*                                                | :heavy_minus_sign:                                      | Date when the filing was submitted to the SEC           |
| `form`                                                  | *string*                                                | :heavy_minus_sign:                                      | Type of SEC form (e.g., 10-K, 10-Q, 8-K)                |
| `quarter`                                               | *number*                                                | :heavy_minus_sign:                                      | Fiscal quarter number (1-4)                             |
| `report`                                                | [models.ReportedReport](../models/reported-report.md)   | :heavy_minus_sign:                                      | Financial statements reported within a filing.          |
| `startDate`                                             | *string*                                                | :heavy_minus_sign:                                      | Start date of the reporting period in YYYY-MM-DD format |
| `symbol`                                                | *string*                                                | :heavy_minus_sign:                                      | Stock ticker symbol                                     |
| `year`                                                  | *number*                                                | :heavy_minus_sign:                                      | Fiscal year of the report                               |