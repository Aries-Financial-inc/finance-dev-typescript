# GetHistoryBatchResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { GetHistoryBatchResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: GetHistoryBatchResponse = {
  data: {
    results: [
      {
        count: 858685,
        symbol: "<value>",
        ticks: [],
      },
    ],
  },
  success: true,
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [models.PredMdBatchHistoryResponse](../../models/pred-md-batch-history-response.md) | :heavy_minus_sign:                                                                  | N/A                                                                                 |                                                                                     |
| `success`                                                                           | *boolean*                                                                           | :heavy_check_mark:                                                                  | N/A                                                                                 | true                                                                                |