# RevenueBreakdownDataPoint

Revenue for a single segment along a breakdown axis.

## Example Usage

```typescript
import { RevenueBreakdownDataPoint } from "@ariesdotcom/finance-dev/models";

let value: RevenueBreakdownDataPoint = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `label`                                       | *string*                                      | :heavy_minus_sign:                            | Label for the revenue segment                 |
| `member`                                      | *string*                                      | :heavy_minus_sign:                            | XBRL member identifier for the segment        |
| `percentage`                                  | *number*                                      | :heavy_minus_sign:                            | Percentage of total revenue from this segment |
| `unit`                                        | *string*                                      | :heavy_minus_sign:                            | Unit of measurement (e.g., USD)               |
| `value`                                       | *number*                                      | :heavy_minus_sign:                            | Revenue value for this segment                |