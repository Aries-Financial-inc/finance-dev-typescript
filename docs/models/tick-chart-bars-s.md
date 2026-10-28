# TickChartBarsS

Response status. `ok` means chart arrays are usable; `no_data` means no matching trade activity was found; `error` means read `errmsg`.

## Example Usage

```typescript
import { TickChartBarsS } from "@ariesdotcom/finance-dev/models";

let value: TickChartBarsS = "error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "no_data" | "error" | Unrecognized<string>
```