# InstrumentType

Instrument class returned by symbol search.

## Example Usage

```typescript
import { InstrumentType } from "@ariesdotcom/finance-dev/models";

let value: InstrumentType = "stock";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"stock" | "option" | Unrecognized<string>
```