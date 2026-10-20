# LogoSearchResponseData

## Example Usage

```typescript
import { LogoSearchResponseData } from "finance-dev/models";

let value: LogoSearchResponseData = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `colors`                                                                  | Record<string, *any*>                                                     | :heavy_minus_sign:                                                        | Brand color palette (if available)                                        |
| `createdAt`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Timestamp when the logo was first added (ISO 8601 format)                 |
| `files`                                                                   | [models.LogoSearchResponseFiles](../models/logo-search-response-files.md) | :heavy_minus_sign:                                                        | Available logo file variants                                              |
| `id`                                                                      | *string*                                                                  | :heavy_minus_sign:                                                        | Unique identifier for the logo record                                     |
| `searchKey`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Search key used to identify the company (e.g., NASDAQ:TSLA)               |
| `updatedAt`                                                               | *string*                                                                  | :heavy_minus_sign:                                                        | Timestamp when the logo was last updated (ISO 8601 format)                |