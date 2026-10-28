# GetIndexChartBarsPrecision

How long each chart bar covers. Pair with `period` to set the exact size. Note the singular form (different from `/v1/indices/bar` and `/v1/indices/bars`). Allowed values:
- `Minute` — minute bars (intraday).
- `Hour` — hour bars.

## Example Usage

```typescript
import { GetIndexChartBarsPrecision } from "@ariesdotcom/finance-dev/models/operations";

let value: GetIndexChartBarsPrecision = "Minute";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Minute" | "Hour" | Unrecognized<string>
```