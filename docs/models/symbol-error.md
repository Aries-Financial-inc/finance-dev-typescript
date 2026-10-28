# SymbolError

Error entry for a symbol that could not be resolved in a details request.

## Example Usage

```typescript
import { SymbolError } from "@ariesdotcom/finance-dev/models";

let value: SymbolError = {
  error: "string",
  symbol: "string",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `error`                                                                                    | *string*                                                                                   | :heavy_minus_sign:                                                                         | Error detail as a string. Exact message content is not fixed and should not be hard-coded. | string                                                                                     |
| `symbol`                                                                                   | *string*                                                                                   | :heavy_minus_sign:                                                                         | Symbol that had an error                                                                   | string                                                                                     |