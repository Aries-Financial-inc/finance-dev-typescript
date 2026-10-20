# Sort

Sort direction for aggregate bars. Use `asc` for oldest first or `desc` for newest first.

## Example Usage

```typescript
import { Sort } from "finance-dev/models/operations";

let value: Sort = "asc";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"asc" | "desc" | Unrecognized<string>
```