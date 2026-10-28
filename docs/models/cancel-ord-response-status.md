# CancelOrdResponseStatus

Order status after the cancel request. Typical values after a successful cancel:
- `PENDING_CANCEL` — cancel request accepted by the broker but not yet final. Keep monitoring; will move to `CANCELED` once confirmed.
- `CANCELED` — order is fully cancelled; no further fills will occur.
- `REJECTED` — the cancel was refused (e.g. the order had already fully filled). The original order is unchanged.

The full FIX OrdStatus enum is supported — see the Place Order response for the complete list of possible values.

## Example Usage

```typescript
import { CancelOrdResponseStatus } from "@ariesdotcom/finance-dev/models";

let value: CancelOrdResponseStatus = "CANCELED";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NEW" | "PARTIALLY_FILLED" | "FILLED" | "DONE_FOR_DAY" | "CANCELED" | "REPLACED" | "PENDING_CANCEL" | "STOPPED" | "REJECTED" | "SUSPENDED" | "PENDING_NEW" | "CALCULATED" | "EXPIRED" | "ACCEPTED_FOR_BID" | "PENDING_REPLACE" | "SUPERSEDED" | Unrecognized<string>
```