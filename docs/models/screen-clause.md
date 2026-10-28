# ScreenClause

One filter condition: field name, comparison operator, and value (string).

## Example Usage

```typescript
import { ScreenClause } from "@ariesdotcom/finance-dev/models";

let value: ScreenClause = {};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `field`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Screener field name (e.g. marketcap, pricetoearnings, roe, volume, open_price, dilutedeps, cashandequivalents) |
| `operator`                                                                                                     | [models.ScreenClauseOperator](../models/screen-clause-operator.md)                                             | :heavy_minus_sign:                                                                                             | Comparison: eq, gt, gte, lt, lte, contains                                                                     |
| `value`                                                                                                        | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Value to compare against (e.g. 1000000000, 0.15)                                                               |