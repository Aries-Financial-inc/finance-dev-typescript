# ScreenGroupOperator

How the clauses inside this group are combined:
- `AND` — every clause in the group must match (logical AND).
- `OR` — at least one clause in the group must match (logical OR).
- `NOT` — negate the clause inside the group (logical NOT).

## Example Usage

```typescript
import { ScreenGroupOperator } from "finance-dev/models";

let value: ScreenGroupOperator = "AND";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AND" | "OR" | "NOT" | Unrecognized<string>
```