# AppErrorType

Categorical error type. Use this for branching error-handling logic; the values are stable across endpoints:
- `VALIDATION` — request body or query parameters failed validation.
- `AUTHENTICATION` — missing, invalid, or expired token.
- `AUTHORIZATION` — token is valid but lacks the required scope/permission.
- `NOT_FOUND` — the requested resource does not exist.
- `CONFLICT` — request conflicts with current state (e.g. duplicate).
- `INTERNAL` — server-side error; retry or contact support.
- `TIMEOUT` — operation took too long.
- `UNKNOWN` — uncategorized error; check `message`.
(Additional categorical values may appear in service-specific responses.)

## Example Usage

```typescript
import { AppErrorType } from "finance-dev/models";

let value: AppErrorType = "DATABASE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"UNKNOWN" | "VALIDATION" | "AUTHENTICATION" | "AUTHORIZATION" | "NOT_FOUND" | "CONFLICT" | "INTERNAL" | "TIMEOUT" | "RATE_LIMIT" | "BAD_REQUEST" | "DATABASE" | "EXTERNAL_SERVICE" | "PRECONDITION_FAILED" | "SERVICE_UNAVAILABLE" | "GRPC" | "QUEUE" | "JSON_PARSING" | Unrecognized<string>
```