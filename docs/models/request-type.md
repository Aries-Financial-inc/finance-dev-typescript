# RequestType

`all` when no `symbol` was given, otherwise `by_security`.

## Example Usage

```typescript
import { RequestType } from "@ariesdotcom/finance-dev/models";

let value: RequestType = "all";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"all" | "by_security" | Unrecognized<string>
```