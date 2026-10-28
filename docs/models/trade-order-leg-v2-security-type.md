# TradeOrderLegV2SecurityType

Instrument type for this leg. EQUITY is stock or ETF; OPTION is an options contract.

## Example Usage

```typescript
import { TradeOrderLegV2SecurityType } from "@ariesdotcom/finance-dev/models";

let value: TradeOrderLegV2SecurityType = "OPTION";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EQUITY" | "OPTION" | Unrecognized<string>
```