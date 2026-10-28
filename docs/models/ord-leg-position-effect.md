# OrdLegPositionEffect

Whether this leg opens or closes a position. Use `OPEN` for a new position and `CLOSE` when closing an existing position.

## Example Usage

```typescript
import { OrdLegPositionEffect } from "@ariesdotcom/finance-dev/models";

let value: OrdLegPositionEffect = "OPEN";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"O" | "C" | "OPEN" | "CLOSE" | Unrecognized<string>
```