# OrdResponseStatus

Current order lifecycle state, mirroring FIX Tag 39 (OrdStatus). Most common values you'll see:
- `PENDING_NEW` — broker has not yet acknowledged the order.
- `NEW` — order is live on the exchange (working, not yet executing).
- `PARTIALLY_FILLED` — some of `qty` has filled; check `cumQty` and `leavesQty`.
- `FILLED` — the entire order has executed.
- `PENDING_CANCEL` / `CANCELED` — cancel request in progress / completed.
- `PENDING_REPLACE` / `REPLACED` — replace request in progress / completed.
- `REJECTED` — broker refused the order; see `ordRejReason` and `text`.
- `EXPIRED` — order reached its time-in-force limit without filling.
- `STOPPED`, `SUSPENDED`, `DONE_FOR_DAY`, `CALCULATED`, `ACCEPTED_FOR_BID`, `SUPERSEDED` — additional FIX states; rare in normal flows.

## Example Usage

```typescript
import { OrdResponseStatus } from "finance-dev/models";

let value: OrdResponseStatus = "NEW";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NEW" | "PARTIALLY_FILLED" | "FILLED" | "DONE_FOR_DAY" | "CANCELED" | "REPLACED" | "PENDING_CANCEL" | "STOPPED" | "REJECTED" | "SUSPENDED" | "PENDING_NEW" | "CALCULATED" | "EXPIRED" | "ACCEPTED_FOR_BID" | "PENDING_REPLACE" | "SUPERSEDED" | Unrecognized<string>
```