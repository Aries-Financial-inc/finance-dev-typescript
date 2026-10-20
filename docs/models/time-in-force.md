# TimeInForce

## Example Usage

```typescript
import { TimeInForce } from "finance-dev/models";

let value: TimeInForce = "day";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"day" | "gtc" | "ioc" | "fok" | "gtd" | Unrecognized<string>
```