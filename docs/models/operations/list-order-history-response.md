# ListOrderHistoryResponse

## Example Usage

```typescript
import { ListOrderHistoryResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: ListOrderHistoryResponse = {
  result: {
    orders: [
      {
        exDestination: "MNGD",
        side: "BUY",
        timeInForce: "DAY",
        type: "LIMIT",
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `result`                                                             | [models.GetOrdersV2Response](../../models/get-orders-v2-response.md) | :heavy_check_mark:                                                   | N/A                                                                  |