# SearchLogosSearchKeysType

Tells the API how to interpret the value you send in `searchKeys`. Allowed values:
- `firm_id` — the value is a firm/company internal ID.
- `firm` — the value is the firm/company name.

## Example Usage

```typescript
import { SearchLogosSearchKeysType } from "finance-dev/models/operations";

let value: SearchLogosSearchKeysType = "symbol";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"symbol" | "cik" | "cusip" | "isin" | Unrecognized<string>
```