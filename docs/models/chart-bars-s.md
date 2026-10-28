# ChartBarsS

Response status. `ok` means chart arrays are usable; `no_data` means the symbol or range returned no bars; `error` means read `errmsg`.

## Example Usage

```typescript
import { ChartBarsS } from "@ariesdotcom/finance-dev/models";

let value: ChartBarsS = "error";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "no_data" | "error" | Unrecognized<string>
```