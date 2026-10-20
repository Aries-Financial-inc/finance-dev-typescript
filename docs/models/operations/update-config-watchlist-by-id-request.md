# UpdateConfigWatchlistByIdRequest

## Example Usage

```typescript
import { UpdateConfigWatchlistByIdRequest } from "finance-dev/models/operations";

let value: UpdateConfigWatchlistByIdRequest = {
  watchlistId: 12345,
  body: {
    addSymbols: [
      "TSLA",
    ],
    name: "<value>",
    removeSymbols: [
      "MSFT",
    ],
  },
};
```

## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         | Example                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `watchlistId`                                                                                                                                       | *number*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The numeric ID of the watchlist to update. You can get this from a previous list/create/update response (the `id` field in the returned watchlist). | 12345                                                                                                                                               |
| `body`                                                                                                                                              | *models.UpdateWatchlistRequestUnion*                                                                                                                | :heavy_check_mark:                                                                                                                                  | At least one of `name`, `add_symbols`, or `remove_symbols` must be included.                                                                        |                                                                                                                                                     |