# ExDestination

Where the order was routed for execution. Useful for support diagnostics and advanced routing displays.
- `MNGD` — Managed routing (Aries chooses the best venue automatically).
- `MNGDFTE` — Managed routing with fill-then-end (extended) handling.

## Example Usage

```typescript
import { ExDestination } from "@ariesdotcom/finance-dev/models";

let value: ExDestination = "MNGD";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"MNGD" | "MNGDFTE" | Unrecognized<string>
```