# CreateWatchlistRequest

Request body for creating a new watchlist.

## Example Usage

```typescript
import { CreateWatchlistRequest } from "@ariesdotcom/finance-dev/models";

let value: CreateWatchlistRequest = {
  name: "<value>",
  symbols: [
    "AAPL",
    "GOOGL",
    "MSFT",
  ],
};
```

## Fields

| Field                                                                                                                                                                                            | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      | Example                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `name`                                                                                                                                                                                           | *string*                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                               | User-facing name for the new watchlist, such as Tech Stocks or Dividend Ideas. Must not match the name of another watchlist the user already has (case-sensitive).                               |                                                                                                                                                                                                  |
| `symbols`                                                                                                                                                                                        | *string*[]                                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                               | Symbols to save in the new watchlist. Use exact uppercase ticker symbols; symbols that can't be resolved are dropped from the saved list and returned in the response's `invalid_symbols` field. | [<br/>"AAPL",<br/>"GOOGL",<br/>"MSFT"<br/>]                                                                                                                                                      |