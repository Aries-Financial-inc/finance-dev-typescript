# AccountPositionSecurityType

Indicates whether the position is an equity/stock position or an option position. Use this value to decide which position details and actions should be shown in the UI.
- `EQUITY` — a stock or ETF position.
- `OPTION` — an option contract position.

## Example Usage

```typescript
import { AccountPositionSecurityType } from "finance-dev/models";

let value: AccountPositionSecurityType = "EQUITY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"EQUITY" | "OPTION" | Unrecognized<string>
```