# IndexSearchResponse

Response containing indices that match a search query.

## Example Usage

```typescript
import { IndexSearchResponse } from "finance-dev/models";

let value: IndexSearchResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `indices`                                                                     | [models.IndexSearchResponseIndex](../models/index-search-response-index.md)[] | :heavy_minus_sign:                                                            | Array of matching indices                                                     |