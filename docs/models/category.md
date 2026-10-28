# Category

What kind of trade this order represents.
- `EQUITY` — Plain stock or ETF order.
- `SINGLE_LEG` — One option contract (call or put).
- `MULTI_LEG` — Two-to-four-leg option strategy (spread, condor, straddle, etc.). See the `legs` array.

Omitted when the order has not been classified.

## Example Usage

```typescript
import { Category } from "@ariesdotcom/finance-dev/models";

let value: Category = "EQUITY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SINGLE_LEG" | "MULTI_LEG" | "EQUITY" | Unrecognized<string>
```