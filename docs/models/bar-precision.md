# BarPrecision

Unit of each bar. Combine with `period` to set the exact bar size.

## Example Usage

```typescript
import { BarPrecision } from "@ariesdotcom/finance-dev/models";

let value: BarPrecision = "Minutes";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Minutes" | "Hours" | Unrecognized<string>
```