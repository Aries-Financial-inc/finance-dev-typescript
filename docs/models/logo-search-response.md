# LogoSearchResponse

Response containing logo records that match a search query.

## Example Usage

```typescript
import { LogoSearchResponse } from "@ariesdotcom/finance-dev/models";

let value: LogoSearchResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [models.LogoSearchResponseData](../models/logo-search-response-data.md)[] | :heavy_minus_sign:                                                        | Array of logo data matching the search query                              |
| `ok`                                                                      | *boolean*                                                                 | :heavy_minus_sign:                                                        | Request success status                                                    |