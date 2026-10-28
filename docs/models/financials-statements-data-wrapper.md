# FinancialsStatementsDataWrapper

Symbol and list of standardized financial statements by period.

## Example Usage

```typescript
import { FinancialsStatementsDataWrapper } from "@ariesdotcom/finance-dev/models";

let value: FinancialsStatementsDataWrapper = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `financials`                                                    | [models.FinancialStatement](../models/financial-statement.md)[] | :heavy_minus_sign:                                              | Array of financial statements for different periods             |
| `symbol`                                                        | *string*                                                        | :heavy_minus_sign:                                              | Stock ticker symbol                                             |