# OrderSideEnum

Which direction to trade in. Pick one:
- `BUY` — buying shares or contracts (opens a long position or closes an existing short).
- `SELL` — selling shares or contracts you already hold (closes a long position).
- `SELL_SHORT` — selling shares you do not own (opens a short position). Subject to short-sale regulations.
- `BUY_TO_COVER` — buying shares to close an open short position.

## Example Usage

```typescript
import { OrderSideEnum } from "finance-dev/models";

let value: OrderSideEnum = "BUY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"BUY" | "SELL" | "SELL_SHORT" | "BUY_TO_COVER" | Unrecognized<string>
```