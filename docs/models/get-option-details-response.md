# GetOptionDetailsResponse

Wrapper for GET /v1/marketdata/options/details: `data` for successful symbols, `errors` when applicable.

## Example Usage

```typescript
import { GetOptionDetailsResponse } from "@ariesdotcom/finance-dev/models";

let value: GetOptionDetailsResponse = {
  data: [
    {
      askPrice: 80.9,
      bidPrice: 78.05,
      closePrice: 93.5,
      lastPrice: 79.76,
      midPrice: 79.475,
      symbol: "GOOG270115C00285000",
    },
  ],
  errors: [],
};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [models.OptionDetailsDTO](../models/option-details-dto.md)[]                  | :heavy_minus_sign:                                                            | Option contracts that returned a pricing snapshot                             |
| `errors`                                                                      | [models.SymbolError](../models/symbol-error.md)[]                             | :heavy_minus_sign:                                                            | Per-symbol error entries when a requested symbol cannot be included in `data` |