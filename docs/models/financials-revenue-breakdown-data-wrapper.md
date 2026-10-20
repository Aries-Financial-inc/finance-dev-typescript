# FinancialsRevenueBreakdownDataWrapper

Company identifiers and revenue breakdown entries from SEC filings.

## Example Usage

```typescript
import { FinancialsRevenueBreakdownDataWrapper } from "finance-dev/models";

let value: FinancialsRevenueBreakdownDataWrapper = {};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `cik`                                                                  | *string*                                                               | :heavy_minus_sign:                                                     | Central Index Key assigned by the SEC.                                 |
| `data`                                                                 | [models.RevenueBreakdownEntry](../models/revenue-breakdown-entry.md)[] | :heavy_minus_sign:                                                     | Revenue breakdown entries by filing.                                   |
| `symbol`                                                               | *string*                                                               | :heavy_minus_sign:                                                     | Stock ticker symbol.                                                   |