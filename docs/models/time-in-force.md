# TimeInForce

## Example Usage

```typescript
import { TimeInForce } from "@ariesdotcom/finance-dev/models";

let value: TimeInForce = "day";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"day" | "gtc" | "ioc" | "fok" | "gtd" | Unrecognized<string>
```