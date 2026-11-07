# AdvancedOrderRole

The order's role within its advanced-order list.
- `SIBLING` — An OCO order.
- `ENTRY`, `PROFIT_TARGET`, `STOP_LOSS` — Bracket orders.
- `PARENT`, `CHILD` — OTO and OTOCO orders.

Omitted for ordinary orders.

## Example Usage

```typescript
import { AdvancedOrderRole } from "@ariesdotcom/finance-dev/models";

let value: AdvancedOrderRole = "PARENT";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SIBLING" | "ENTRY" | "PROFIT_TARGET" | "STOP_LOSS" | "PARENT" | "CHILD" | Unrecognized<string>
```