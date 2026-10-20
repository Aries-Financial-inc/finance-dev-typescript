# GetConfigWatchlistByIdRequest

## Example Usage

```typescript
import { GetConfigWatchlistByIdRequest } from "finance-dev/models/operations";

let value: GetConfigWatchlistByIdRequest = {
  watchlistId: 12345,
};
```

## Fields

| Field                                                                                                                                                 | Type                                                                                                                                                  | Required                                                                                                                                              | Description                                                                                                                                           | Example                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `watchlistId`                                                                                                                                         | *number*                                                                                                                                              | :heavy_check_mark:                                                                                                                                    | The numeric ID of the watchlist to retrieve. You can get this from a previous list/create/update response (the `id` field in the returned watchlist). | 12345                                                                                                                                                 |