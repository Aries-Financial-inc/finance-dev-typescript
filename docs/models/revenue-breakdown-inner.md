# RevenueBreakdownInner

Total revenue for a reporting period with its breakdown by axis.

## Example Usage

```typescript
import { RevenueBreakdownInner } from "@ariesdotcom/finance-dev/models";

let value: RevenueBreakdownInner = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `concept`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | XBRL concept tag for revenue                                         |
| `endDate`                                                            | *string*                                                             | :heavy_minus_sign:                                                   | End date of the reporting period in YYYY-MM-DD format                |
| `revenueBreakdown`                                                   | [models.RevenueBreakdownAxis](../models/revenue-breakdown-axis.md)[] | :heavy_minus_sign:                                                   | Array of revenue breakdown axes (by product, geography, etc.)        |
| `startDate`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | Start date of the reporting period in YYYY-MM-DD format              |
| `unit`                                                               | *string*                                                             | :heavy_minus_sign:                                                   | Unit of measurement (e.g., USD)                                      |
| `value`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Total revenue value                                                  |