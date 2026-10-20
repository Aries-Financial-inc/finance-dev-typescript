# GetFinancialStatementsRequest

## Example Usage

```typescript
import { GetFinancialStatementsRequest } from "finance-dev/models/operations";

let value: GetFinancialStatementsRequest = {
  symbol: "<value>",
  statement: "ic",
  freq: "quarterly",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `symbol`                                                                               | *string*                                                                               | :heavy_check_mark:                                                                     | Stock symbol, such as AAPL. Use it to choose the company you want to research.         |                                                                                        |
| `statement`                                                                            | [models.FinancialStatementType](../../models/financial-statement-type.md)              | :heavy_check_mark:                                                                     | Financial statement type to return. Choose the statement category your analysis needs. | ic                                                                                     |
| `freq`                                                                                 | [models.ReportingFrequency](../../models/reporting-frequency.md)                       | :heavy_check_mark:                                                                     | Reporting frequency to return. Use annual or quarterly based on your analysis view.    | quarterly                                                                              |
| `preliminary`                                                                          | *boolean*                                                                              | :heavy_minus_sign:                                                                     | Include preliminary data (optional boolean).                                           |                                                                                        |