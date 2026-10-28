# GetIndexBarPrecision

How long each bar covers. Pair with `period` to set the exact size (e.g. `precision=Minutes`, `period=5` = 5-minute bars). Allowed values:
- `Minutes` — minute bars (combine with `period` for 1, 5, 15, 30-minute candles).
- `Hours` — hour bars (combine with `period` for 1, 2, 4-hour candles).

## Example Usage

```typescript
import { GetIndexBarPrecision } from "@ariesdotcom/finance-dev/models/operations";

let value: GetIndexBarPrecision = "Minutes";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Minutes" | "Hours" | Unrecognized<string>
```