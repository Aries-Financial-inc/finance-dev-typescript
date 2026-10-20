# LogoSyncResponse

Paginated response containing logo records for bulk sync.

## Example Usage

```typescript
import { LogoSyncResponse } from "finance-dev/models";

let value: LogoSyncResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `data`                                                                | [models.LogoSyncResponseData](../models/logo-sync-response-data.md)[] | :heavy_minus_sign:                                                    | Array of logo records                                                 |
| `hasMore`                                                             | *boolean*                                                             | :heavy_minus_sign:                                                    | Whether more pages are available                                      |
| `ok`                                                                  | *boolean*                                                             | :heavy_minus_sign:                                                    | Request success status                                                |
| `page`                                                                | *number*                                                              | :heavy_minus_sign:                                                    | Current page number                                                   |
| `pageSize`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Number of records per page                                            |