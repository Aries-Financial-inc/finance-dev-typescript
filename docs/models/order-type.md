# OrderType

ForecastEx does not support `stop` or `market_to_limit` orders.

## Example Usage

```typescript
import { OrderType } from "@ariesdotcom/finance-dev/models";

let value: OrderType = "limit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"limit" | "stop_limit" | Unrecognized<string>
```