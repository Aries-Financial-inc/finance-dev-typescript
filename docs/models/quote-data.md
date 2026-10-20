# QuoteData

One quote record in a quote response. Use `s` to match each record back to the requested symbol.

## Example Usage

```typescript
import { QuoteData } from "finance-dev/models";

let value: QuoteData = {};
```

## Fields

| Field                                                                                                   | Type                                                                                                    | Required                                                                                                | Description                                                                                             |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `n`                                                                                                     | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Display name returned for the quoted instrument or venue.                                               |
| `s`                                                                                                     | *string*                                                                                                | :heavy_minus_sign:                                                                                      | Symbol this quote record belongs to. Match this against the symbol requested in the `symbols` query.    |
| `v`                                                                                                     | [models.QuoteValues](../models/quote-values.md)                                                         | :heavy_minus_sign:                                                                                      | Market quote values for a symbol. Use bid/ask for trading decisions and last price for display context. |