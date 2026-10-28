# GetOptionTradesOrder

Sort order for returned records. Use asc for oldest first or desc for newest first when supported.

## Example Usage

```typescript
import { GetOptionTradesOrder } from "@ariesdotcom/finance-dev/models/operations";

let value: GetOptionTradesOrder = "desc";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"asc" | "desc" | Unrecognized<string>
```