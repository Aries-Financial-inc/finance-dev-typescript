# ListActiveOrdersResponse

## Example Usage

```typescript
import { ListActiveOrdersResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: ListActiveOrdersResponse = {
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