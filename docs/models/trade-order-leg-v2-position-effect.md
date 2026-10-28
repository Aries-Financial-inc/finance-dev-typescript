# TradeOrderLegV2PositionEffect

Whether this leg opens a new position or closes an existing one:
- `OPEN` — opens a new position (or increases an existing one).
- `CLOSE` — closes an existing position (or reduces it).

## Example Usage

```typescript
import { TradeOrderLegV2PositionEffect } from "@ariesdotcom/finance-dev/models";

let value: TradeOrderLegV2PositionEffect = "CLOSE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"OPEN" | "CLOSE" | Unrecognized<string>
```