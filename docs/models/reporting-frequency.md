# ReportingFrequency

How often the underlying data is reported:
- `annual` — once per fiscal year (10-K, full-year statements).
- `quarterly` — once per fiscal quarter (10-Q, quarterly statements).

## Example Usage

```typescript
import { ReportingFrequency } from "finance-dev/models";

let value: ReportingFrequency = "quarterly";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"annual" | "quarterly" | Unrecognized<string>
```