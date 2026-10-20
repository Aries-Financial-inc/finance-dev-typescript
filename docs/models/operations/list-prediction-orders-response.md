# ListPredictionOrdersResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { ListPredictionOrdersResponse } from "finance-dev/models/operations";

let value: ListPredictionOrdersResponse = {
  data: {
    orders: [
      {
        accountId: "ACCOUNT-0001",
        avgPx: "0",
        clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
        createdAt: new Date("2026-08-02T18:05:11.456Z"),
        cumQty: "0",
        leavesQty: "10",
        orderId: "0b9f3c2e-5d6a-4f1b-8e7c-9a0d1e2f3a4b",
        orderType: "limit",
        outcome: "YES",
        price: "0.54",
        quantity: "10",
        side: "buy",
        state: "pending_new",
        stopPx: "0.50",
        symbol: "HORC_1126_Republican",
        timeInForce: "day",
        updatedAt: new Date("2024-07-13T09:23:03.732Z"),
        workingPrice: "0.54",
        workingQuantity: "10",
      },
    ],
  },
  success: true,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [models.PredOrdersOrderPage](../../models/pred-orders-order-page.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `success`                                                            | *boolean*                                                            | :heavy_check_mark:                                                   | N/A                                                                  | true                                                                 |