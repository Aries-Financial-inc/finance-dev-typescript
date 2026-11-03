# RejectReason

Set when `status` is `rejected`.

## Example Usage

```typescript
import { RejectReason } from "@ariesdotcom/finance-dev/models";

let value: RejectReason = "business_reject";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"not_supported" | "unknown_security" | "other" | "business_reject" | Unrecognized<string>
```