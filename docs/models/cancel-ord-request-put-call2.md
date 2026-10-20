# CancelOrdRequestPutCall2

Option contract type for option cancels. Use `CALL` for calls and `PUT` for puts. Omit for equity cancels.

## Example Usage

```typescript
import { CancelOrdRequestPutCall2 } from "finance-dev/models";

let value: CancelOrdRequestPutCall2 = "CALL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PUT" | "CALL" | "P" | "C" | Unrecognized<string>
```