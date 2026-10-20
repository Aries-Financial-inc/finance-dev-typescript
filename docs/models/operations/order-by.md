# OrderBy

Sort direction by `order_created_at`. Defaults to `desc` (newest first). Use `asc` for chronological exports.

## Example Usage

```typescript
import { OrderBy } from "finance-dev/models/operations";

let value: OrderBy = "desc";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"asc" | "desc" | Unrecognized<string>
```