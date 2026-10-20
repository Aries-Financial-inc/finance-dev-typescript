# PredOrdersAppErrorType

Categorical error type, in lowercase.

## Example Usage

```typescript
import { PredOrdersAppErrorType } from "finance-dev/models";

let value: PredOrdersAppErrorType = "bad_request";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bad_request" | "authentication" | "not_found" | "conflict" | "rate_limit" | "unavailable" | "timeout" | "internal" | Unrecognized<string>
```