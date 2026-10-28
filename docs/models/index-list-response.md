# IndexListResponse

Response containing the indices in an index group.

## Example Usage

```typescript
import { IndexListResponse } from "@ariesdotcom/finance-dev/models";

let value: IndexListResponse = {
  indices: [
    {
      currency: "USD",
      indexGroup: "IND_CBOM",
      indexName: "S&P 500",
      symbol: "SPX",
    },
  ],
  nextPage: "AFEFB09147DA3C09B6A280B0A807F239",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `indices`                                                                                     | [models.IndexListResponseIndex](../models/index-list-response-index.md)[]                     | :heavy_minus_sign:                                                                            | Array of indices in the specified index group                                                 |                                                                                               |
| `nextPage`                                                                                    | *string*                                                                                      | :heavy_minus_sign:                                                                            | Token for the next page. Send it as `nextPage` on the next request. Omitted on the last page. | AFEFB09147DA3C09B6A280B0A807F239                                                              |