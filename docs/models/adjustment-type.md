# AdjustmentType

Type of stock split adjustment

## Example Usage

```typescript
import { AdjustmentType } from "@ariesdotcom/finance-dev/models";

let value: AdjustmentType = "stock_dividend";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"forward_split" | "reverse_split" | "stock_dividend" | Unrecognized<string>
```