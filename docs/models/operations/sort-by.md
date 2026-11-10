# SortBy

Result order. `none` (default): a q match first, then symbol ascending, at every level, so pages are stable. `openInterest`: by open interest from the venue's last daily prices file, each type by its own total, with a q match first; contracts with no open interest come last. Any other value returns 400 INVALID_SORT_BY.

## Example Usage

```typescript
import { SortBy } from "@ariesdotcom/finance-dev/models/operations";

let value: SortBy = "openInterest";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"none" | "openInterest" | Unrecognized<string>
```