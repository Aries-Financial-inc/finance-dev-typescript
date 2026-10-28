# GetAnalystInsightsSearchKeysType

Tells the API how to interpret the value you send in `searchKeys`. Allowed values:
- `firm_id` — the value is a firm/company internal ID.
- `firm` — the value is the firm/company name.

## Example Usage

```typescript
import { GetAnalystInsightsSearchKeysType } from "@ariesdotcom/finance-dev/models/operations";

let value: GetAnalystInsightsSearchKeysType = "firm";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"firm_id" | "firm" | Unrecognized<string>
```