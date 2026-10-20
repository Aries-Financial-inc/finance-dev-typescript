# GetStockSplitsResponse

## Example Usage

```typescript
import { GetStockSplitsResponse } from "finance-dev/models/operations";

let value: GetStockSplitsResponse = {
  result: {
    results: [
      {
        executionDate: new Date("2025-01-02"),
        splitFrom: 4862.07,
        splitTo: 7004.04,
        ticker: "<value>",
      },
    ],
    status: "OK",
  },
};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `result`                                                            | [models.StockSplitsResponse](../../models/stock-splits-response.md) | :heavy_check_mark:                                                  | N/A                                                                 |