# FinancialStatementType

Statement: bs (balance sheet), ic (income), cf (cash flow).

## Example Usage

```typescript
import { FinancialStatementType } from "finance-dev/models";

let value: FinancialStatementType = "ic";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bs" | "ic" | "cf" | Unrecognized<string>
```