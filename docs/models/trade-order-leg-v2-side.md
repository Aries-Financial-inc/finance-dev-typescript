# TradeOrderLegV2Side

Direction for this leg. BUY purchases the instrument; SELL sells it.

## Example Usage

```typescript
import { TradeOrderLegV2Side } from "finance-dev/models";

let value: TradeOrderLegV2Side = "BUY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"BUY" | "SELL" | Unrecognized<string>
```