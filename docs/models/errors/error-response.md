# ErrorResponse

Flat error body: an `error` string, with optional structured `codes` and additional `metadata`.

## Example Usage

```typescript
import { ErrorResponse } from "finance-dev/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `codes`                                                                                    | [models.ErrorCode](../../models/error-code.md)[]                                           | :heavy_minus_sign:                                                                         | Structured error codes for programmatic handling                                           |                                                                                            |
| `error`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Error detail as a string. Exact message content is not fixed and should not be hard-coded. | string                                                                                     |
| `metadata`                                                                                 | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | Additional error context                                                                   |                                                                                            |