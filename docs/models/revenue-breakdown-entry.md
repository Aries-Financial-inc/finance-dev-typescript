# RevenueBreakdownEntry

Revenue breakdown for a single SEC filing.

## Example Usage

```typescript
import { RevenueBreakdownEntry } from "@ariesdotcom/finance-dev/models";

let value: RevenueBreakdownEntry = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `accessNumber`                                                       | *string*                                                             | :heavy_minus_sign:                                                   | SEC accession number for the filing                                  |
| `breakdown`                                                          | [models.RevenueBreakdownInner](../models/revenue-breakdown-inner.md) | :heavy_minus_sign:                                                   | Total revenue for a reporting period with its breakdown by axis.     |