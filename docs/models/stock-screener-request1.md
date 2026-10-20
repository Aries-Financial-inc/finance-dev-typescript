# StockScreenerRequest1

## Example Usage

```typescript
import { StockScreenerRequest1 } from "finance-dev/models";

let value: StockScreenerRequest1 = {
  clauses: [],
  operator: "NOT",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `clauses`                                                                                | [models.ScreenClause](../models/screen-clause.md)[]                                      | :heavy_check_mark:                                                                       | List of filter conditions (field, operator, value). Required unless groups is non-empty. |
| `groups`                                                                                 | [models.ScreenGroup](../models/screen-group.md)[]                                        | :heavy_minus_sign:                                                                       | Optional nested groups of clauses for complex logic                                      |
| `operator`                                                                               | [models.StockScreenerRequestOperator1](../models/stock-screener-request-operator1.md)    | :heavy_check_mark:                                                                       | Logical operator for combining clauses: AND, OR, or NOT                                  |