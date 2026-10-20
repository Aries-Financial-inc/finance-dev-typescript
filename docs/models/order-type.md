# OrderType

## Example Usage

```typescript
import { OrderType } from "finance-dev/models";

let value: OrderType = "limit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"limit" | "stop" | "stop_limit" | "market_to_limit" | Unrecognized<string>
```