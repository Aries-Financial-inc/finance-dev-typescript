# SecurityTypeEnum

What kind of instrument the order is for. Pick one:
- `CS` — Common Stock (equity / ETF).
- `OPT` — Option contract (call or put).

## Example Usage

```typescript
import { SecurityTypeEnum } from "finance-dev/models";

let value: SecurityTypeEnum = "CS";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CS" | "OPT" | Unrecognized<string>
```