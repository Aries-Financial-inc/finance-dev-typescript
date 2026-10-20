# SearchResponse

## Example Usage

```typescript
import { SearchResponse } from "finance-dev/models/operations";

let value: SearchResponse = {
  result: {
    data: {
      found: 368902,
      hits: [],
      page: 871542,
      perPage: 595646,
      type: "contracts",
    },
    success: true,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [operations.SearchResponseBody](../../models/operations/search-response-body.md) | :heavy_check_mark:                                                               | N/A                                                                              |