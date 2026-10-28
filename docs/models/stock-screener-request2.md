# StockScreenerRequest2

## Example Usage

```typescript
import { StockScreenerRequest2 } from "@ariesdotcom/finance-dev/models";

let value: StockScreenerRequest2 = {
  groups: [],
  operator: "NOT",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `groups`                                                                                 | [models.ScreenGroup](../models/screen-group.md)[]                                        | :heavy_check_mark:                                                                       | Optional nested groups of clauses for complex logic                                      |
| `clauses`                                                                                | [models.ScreenClause](../models/screen-clause.md)[]                                      | :heavy_minus_sign:                                                                       | List of filter conditions (field, operator, value). Required unless groups is non-empty. |
| `operator`                                                                               | [models.StockScreenerRequestOperator2](../models/stock-screener-request-operator2.md)    | :heavy_check_mark:                                                                       | Logical operator for combining clauses: AND, OR, or NOT                                  |