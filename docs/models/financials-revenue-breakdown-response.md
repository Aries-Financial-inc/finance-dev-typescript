# FinancialsRevenueBreakdownResponse

Response containing revenue breakdown data.

## Example Usage

```typescript
import { FinancialsRevenueBreakdownResponse } from "@ariesdotcom/finance-dev/models";

let value: FinancialsRevenueBreakdownResponse = {};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                 | [models.FinancialsRevenueBreakdownDataWrapper](../models/financials-revenue-breakdown-data-wrapper.md) | :heavy_minus_sign:                                                                                     | Company identifiers and revenue breakdown entries from SEC filings.                                    |