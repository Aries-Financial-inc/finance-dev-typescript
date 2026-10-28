# Source

Data source. Values are case-insensitive.

## Example Usage

```typescript
import { Source } from "@ariesdotcom/finance-dev/models/operations";

let value: Source = "realtime";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"realtime" | "delayed" | Unrecognized<string>
```