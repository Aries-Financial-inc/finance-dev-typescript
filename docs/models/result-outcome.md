# ResultOutcome

The winning outcome, when `settlementValue` is `1` or `0`. Only when `SETTLED`.

## Example Usage

```typescript
import { ResultOutcome } from "@ariesdotcom/finance-dev/models";

let value: ResultOutcome = "NO";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"YES" | "NO" | Unrecognized<string>
```