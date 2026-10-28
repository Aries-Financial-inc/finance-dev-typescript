# NewsListResponse

Response containing a list of news items.

## Example Usage

```typescript
import { NewsListResponse } from "@ariesdotcom/finance-dev/models";

let value: NewsListResponse = {
  news: [
    {
      newsType: "news",
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `news`                                                                     | [models.News](../models/news.md)[]                                         | :heavy_minus_sign:                                                         | Array of news items and press releases, sorted by timestamp (newest first) |