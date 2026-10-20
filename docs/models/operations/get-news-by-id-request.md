# GetNewsByIdRequest

## Example Usage

```typescript
import { GetNewsByIdRequest } from "finance-dev/models/operations";

let value: GetNewsByIdRequest = {
  id: "123456",
  newsType: "news",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `id`                                                                     | *string*                                                                 | :heavy_check_mark:                                                       | Unique news item ID (must be numeric)                                    | 123456                                                                   |
| `newsType`                                                               | [models.NewsTypeEnum](../../models/news-type-enum.md)                    | :heavy_check_mark:                                                       | Type of news item to retrieve. Must be either 'news' or 'press_release'. | news                                                                     |