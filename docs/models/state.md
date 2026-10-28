# State

Order lifecycle state. `unknown` means order entry lost track of the order and says so rather than guessing; see `certainty`.

## Example Usage

```typescript
import { State } from "@ariesdotcom/finance-dev/models";

let value: State = "pending_new";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending_new" | "new" | "partially_filled" | "filled" | "canceled" | "rejected" | "expired" | "done_for_day" | "unknown" | Unrecognized<string>
```