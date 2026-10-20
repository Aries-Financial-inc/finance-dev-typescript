# GetUnifiedSnapshotType

Asset class filter for unified snapshot.

## Example Usage

```typescript
import { GetUnifiedSnapshotType } from "finance-dev/models/operations";

let value: GetUnifiedSnapshotType = "stocks";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"stocks" | "options" | "fx" | "crypto" | "indices" | Unrecognized<string>
```