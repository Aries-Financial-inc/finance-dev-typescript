# FinancialsStatementsResponse

Response containing standardized financial statements.

## Example Usage

```typescript
import { FinancialsStatementsResponse } from "@ariesdotcom/finance-dev/models";

let value: FinancialsStatementsResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [models.FinancialsStatementsDataWrapper](../models/financials-statements-data-wrapper.md) | :heavy_minus_sign:                                                                        | Symbol and list of standardized financial statements by period.                           |