# ListIndicesResponse

## Example Usage

```typescript
import { ListIndicesResponse } from "finance-dev/models/operations";

let value: ListIndicesResponse = {
  result: {
    indices: [
      {
        currency: "USD",
        indexGroup: "IND_CBOM",
        indexName: "S&P 500",
        symbol: "SPX",
      },
    ],
    nextPage: "AFEFB09147DA3C09B6A280B0A807F239",
  },
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `result`                                                        | [models.IndexListResponse](../../models/index-list-response.md) | :heavy_check_mark:                                              | N/A                                                             |