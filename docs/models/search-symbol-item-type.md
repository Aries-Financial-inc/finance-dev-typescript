# SearchSymbolItemType

Instrument class returned by symbol search.

## Example Usage

```typescript
import { SearchSymbolItemType } from "finance-dev/models";

let value: SearchSymbolItemType = "stock";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"stock" | "option" | Unrecognized<string>
```