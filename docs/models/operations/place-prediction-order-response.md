# PlacePredictionOrderResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { PlacePredictionOrderResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: PlacePredictionOrderResponse = {
  data: {
    accountId: "ACCOUNT-0001",
    avgPx: "0",
    clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    createdAt: new Date("2026-02-26T07:05:13.604Z"),
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
    updatedAt: new Date("2025-03-20T11:45:03.250Z"),
    workingPrice: "0.54",
    workingQuantity: "10",
  },
  success: true,
};
```

## Fields

| Field                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                    | Example                                                                                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                                                                                                         | [models.PredOrdersOrder](../../models/pred-orders-order.md)                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                                                             | An order as recorded by order entry. Submitted terms (`quantity`, `price`, …) never change; working terms (`workingQuantity`, `workingPrice`, …) are the venue's answer. Optional decimals and timestamps are omitted when absent, never zero. |                                                                                                                                                                                                                                                |
| `success`                                                                                                                                                                                                                                      | *boolean*                                                                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                            | true                                                                                                                                                                                                                                           |