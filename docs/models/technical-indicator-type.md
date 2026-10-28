# TechnicalIndicatorType

Technical indicator slug (e.g. `sma`, `ema`, `rsi`, `macd`, `bbands`). Pass this with the indicator endpoint to compute that indicator over the requested bars.

## Example Usage

```typescript
import { TechnicalIndicatorType } from "@ariesdotcom/finance-dev/models";

let value: TechnicalIndicatorType = "rsi";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"sma" | "ema" | "rsi" | "macd" | "bbands" | "stoch" | "adx" | "cci" | "willr" | "mfi" | Unrecognized<string>
```