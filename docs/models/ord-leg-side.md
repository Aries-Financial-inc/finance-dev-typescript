# OrdLegSide

Direction for this option leg. Use `BUY` when buying the leg and `SELL` when selling the leg.

## Example Usage

```typescript
import { OrdLegSide } from "finance-dev/models";

let value: OrdLegSide = "BUY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"B" | "S" | "BUY" | "SELL" | Unrecognized<string>
```