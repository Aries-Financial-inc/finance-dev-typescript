# TradeOrderLegV2PutCall

Option contract type. CALL gives the right to buy; PUT gives the right to sell.

## Example Usage

```typescript
import { TradeOrderLegV2PutCall } from "finance-dev/models";

let value: TradeOrderLegV2PutCall = "PUT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CALL" | "PUT" | Unrecognized<string>
```