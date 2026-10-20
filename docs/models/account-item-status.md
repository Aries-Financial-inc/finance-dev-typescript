# AccountItemStatus

Account status. **OPEN** = account open for trading; **SUSPENDED** = account suspended; **CLOSED** = account closed; **PENDING_APEX_VERIFICATION** = sent to Apex, awaiting verification; **CANCELED** = account canceled; **REJECTED** = application/account rejected.

## Example Usage

```typescript
import { AccountItemStatus } from "finance-dev/models";

let value: AccountItemStatus = "OPEN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NEW" | "PENDING_PLAID_VERIFICATION" | "PENDING_APEX_VERIFICATION" | "READY_FOR_BACK_OFFICE" | "BACK_OFFICE" | "OPEN" | "CANCELED" | "REJECTED" | "SUSPENDED" | "CLOSED" | "ERROR" | "AWAITING_REVIEW" | "AWAITING_APEX" | "RETURNED_APEX" | "PENDING_CLOSE" | "STERLING_PENDING" | Unrecognized<string>
```