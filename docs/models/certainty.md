# Certainty

How sure order entry is of `state`. Anything other than `certain` means the order's state could not be confirmed; `certaintyReason` says why.

## Example Usage

```typescript
import { Certainty } from "@ariesdotcom/finance-dev/models";

let value: Certainty = "unknown_unacked";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"certain" | "unknown_unacked" | "unknown_gap" | "unknown_store_lost" | Unrecognized<string>
```