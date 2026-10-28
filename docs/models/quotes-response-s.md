# QuotesResponseS

Overall quote response status. `ok` means quote data was returned; `error` means the request could not be fulfilled.

## Example Usage

```typescript
import { QuotesResponseS } from "@ariesdotcom/finance-dev/models";

let value: QuotesResponseS = "ok";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "error" | Unrecognized<string>
```