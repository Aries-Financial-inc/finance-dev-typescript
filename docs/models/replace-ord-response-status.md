# ReplaceOrdResponseStatus

Order status after the replace request. Typical values after a successful replace:
- `PENDING_REPLACE` — replace request accepted by the broker but not yet final. Keep monitoring; will move to `REPLACED` once confirmed.
- `REPLACED` — the modification took effect. From now on, refer to the order by the new `clOrdId`.
- `REJECTED` — the replace was refused (e.g. the order had already fully filled). The original order is unchanged.

The full FIX OrdStatus enum is supported — see the Place Order response for the complete list of possible values.

## Example Usage

```typescript
import { ReplaceOrdResponseStatus } from "finance-dev/models";

let value: ReplaceOrdResponseStatus = "REPLACED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NEW" | "PARTIALLY_FILLED" | "FILLED" | "DONE_FOR_DAY" | "CANCELED" | "REPLACED" | "PENDING_CANCEL" | "STOPPED" | "REJECTED" | "SUSPENDED" | "PENDING_NEW" | "CALCULATED" | "EXPIRED" | "ACCEPTED_FOR_BID" | "PENDING_REPLACE" | "SUPERSEDED" | Unrecognized<string>
```