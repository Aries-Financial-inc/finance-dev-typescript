# UpdateWatchlistRequest1

## Example Usage

```typescript
import { UpdateWatchlistRequest1 } from "@ariesdotcom/finance-dev/models";

let value: UpdateWatchlistRequest1 = {
  addSymbols: [
    "TSLA",
  ],
  name: "<value>",
  removeSymbols: [
    "MSFT",
  ],
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `addSymbols`                                                                                                                                                                    | *string*[]                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                              | Symbols to add to the watchlist. Use exact uppercase ticker symbols; symbols that can't be resolved are dropped and returned in the response's `invalid_symbols` field.         | [<br/>"TSLA"<br/>]                                                                                                                                                              |
| `name`                                                                                                                                                                          | *string*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                              | New name for the watchlist. Omit to leave the name unchanged; if included, it cannot be empty and must not match the name of another of the user's watchlists (case-sensitive). |                                                                                                                                                                                 |
| `removeSymbols`                                                                                                                                                                 | *string*[]                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                              | Symbols to remove from the watchlist.                                                                                                                                           | [<br/>"MSFT"<br/>]                                                                                                                                                              |