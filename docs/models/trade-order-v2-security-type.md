# TradeOrderV2SecurityType

Instrument type for the order. EQUITY is stock or ETF; OPTION is an options contract.

## Example Usage

```typescript
import { TradeOrderV2SecurityType } from "@ariesdotcom/finance-dev/models";

let value: TradeOrderV2SecurityType = "EQUITY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EQUITY" | "OPTION" | Unrecognized<string>
```