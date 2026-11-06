# ContractState

`ACTIVE` while it trades, `CLOSED` once trading has ended and the result is not yet known, `SETTLED` once it is, and `DELETED` if the venue withdrew it. `CLOSED` and `SETTLED` are never left.

## Example Usage

```typescript
import { ContractState } from "@ariesdotcom/finance-dev/models";

let value: ContractState = "ACTIVE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ACTIVE" | "CLOSED" | "SETTLED" | "DELETED" | Unrecognized<string>
```