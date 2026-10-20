# SearchType

Level hits come back at. `contracts` (default) returns matching contracts; `events` returns one hit per event and `base-events` one per base event, each ranked by its best-matching contract and carrying only its own fields and a count of matching contracts. Echoed in the response.

## Example Usage

```typescript
import { SearchType } from "finance-dev/models/operations";

let value: SearchType = "base-events";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"contracts" | "events" | "base-events" | Unrecognized<string>
```