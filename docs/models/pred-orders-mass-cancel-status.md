# PredOrdersMassCancelStatus

`pending` until the venue answers. `not_sent` means nothing reached the venue.

## Example Usage

```typescript
import { PredOrdersMassCancelStatus } from "@ariesdotcom/finance-dev/models";

let value: PredOrdersMassCancelStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "accepted" | "rejected" | "not_sent" | Unrecognized<string>
```