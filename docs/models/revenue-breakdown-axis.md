# RevenueBreakdownAxis

Revenue breakdown along a single dimension such as product or geography.

## Example Usage

```typescript
import { RevenueBreakdownAxis } from "finance-dev/models";

let value: RevenueBreakdownAxis = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `axis`                                                                          | *string*                                                                        | :heavy_minus_sign:                                                              | XBRL axis identifier (e.g., product line, geography)                            |
| `data`                                                                          | [models.RevenueBreakdownDataPoint](../models/revenue-breakdown-data-point.md)[] | :heavy_minus_sign:                                                              | Array of revenue data points for this axis                                      |
| `label`                                                                         | *string*                                                                        | :heavy_minus_sign:                                                              | Human-readable label for the axis                                               |