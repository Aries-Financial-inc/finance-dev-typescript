# OrdLegPutCall

Option contract type. Use `CALL` for call options and `PUT` for put options.

## Example Usage

```typescript
import { OrdLegPutCall } from "finance-dev/models";

let value: OrdLegPutCall = "CALL";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PUT" | "CALL" | "P" | "C" | Unrecognized<string>
```