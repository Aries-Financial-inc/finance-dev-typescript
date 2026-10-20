# FinancialsReportedDataWrapper

Company identifiers and the list of reported SEC filings.

## Example Usage

```typescript
import { FinancialsReportedDataWrapper } from "finance-dev/models";

let value: FinancialsReportedDataWrapper = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `cik`                                                   | *string*                                                | :heavy_minus_sign:                                      | Central Index Key assigned by the SEC                   |
| `data`                                                  | [models.ReportedFiling](../models/reported-filing.md)[] | :heavy_minus_sign:                                      | Array of reported filings with financial data           |
| `symbol`                                                | *string*                                                | :heavy_minus_sign:                                      | Stock ticker symbol                                     |