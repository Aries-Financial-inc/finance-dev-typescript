# SearchType

Level hits come back at. `contracts` (default) returns matching contracts; `events` returns one hit per event and `base-events` one per base event, each with its own fields, a count of matching contracts and the first contractsPerHit of them in the sortBy order. Echoed in the response.

## Example Usage

```typescript
import { SearchType } from "@ariesdotcom/finance-dev/models/operations";

let value: SearchType = "base-events";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"contracts" | "events" | "base-events" | Unrecognized<string>
```