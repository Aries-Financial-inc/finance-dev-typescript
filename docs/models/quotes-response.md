# QuotesResponse

Response body for quote requests. Use it to render current market prices for one or more symbols.

## Example Usage

```typescript
import { QuotesResponse } from "finance-dev/models";

let value: QuotesResponse = {};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `d`                                                                                                                  | [models.QuoteData](../models/quote-data.md)[]                                                                        | :heavy_minus_sign:                                                                                                   | Quote records for the requested symbols. Iterate this array and use each record's `s` value to match the symbol.     |
| `s`                                                                                                                  | [models.QuotesResponseS](../models/quotes-response-s.md)                                                             | :heavy_minus_sign:                                                                                                   | Overall quote response status. `ok` means quote data was returned; `error` means the request could not be fulfilled. |