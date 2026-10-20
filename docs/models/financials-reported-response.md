# FinancialsReportedResponse

Response containing company financials as reported in SEC filings.

## Example Usage

```typescript
import { FinancialsReportedResponse } from "finance-dev/models";

let value: FinancialsReportedResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [models.FinancialsReportedDataWrapper](../models/financials-reported-data-wrapper.md) | :heavy_minus_sign:                                                                    | Company identifiers and the list of reported SEC filings.                             |