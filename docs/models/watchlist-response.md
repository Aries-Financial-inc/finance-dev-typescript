# WatchlistResponse

Response body containing the user's saved watchlists.

## Example Usage

```typescript
import { WatchlistResponse } from "@ariesdotcom/finance-dev/models";

let value: WatchlistResponse = {};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `userId`                                                                                                   | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | User ID that owns these watchlists. Use it to confirm the response belongs to the expected connected user. |
| `watchlist`                                                                                                | [models.Watchlist](../models/watchlist.md)[]                                                               | :heavy_minus_sign:                                                                                         | Saved watchlists for the user. Render each item as a named list of symbols.                                |