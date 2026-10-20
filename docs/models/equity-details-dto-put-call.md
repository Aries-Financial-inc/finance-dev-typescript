# EquityDetailsDTOPutCall

Option contract type. Empty for non-option instruments. Accepts long or short form:
- `CALL` or `C` — call option (right to buy at strike).
- `PUT` or `P` — put option (right to sell at strike).

## Example Usage

```typescript
import { EquityDetailsDTOPutCall } from "finance-dev/models";

let value: EquityDetailsDTOPutCall = "C";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"PUT" | "CALL" | "P" | "C" | Unrecognized<string>
```