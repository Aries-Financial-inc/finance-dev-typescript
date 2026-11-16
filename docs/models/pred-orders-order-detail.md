# PredOrdersOrderDetail

An order and every venue report against it, read from one snapshot.

## Example Usage

```typescript
import { PredOrdersOrderDetail } from "@ariesdotcom/finance-dev/models";

let value: PredOrdersOrderDetail = {
  events: [
    {
      kind: "cancel_requested",
    },
  ],
  order: {
    accountId: "ACCOUNT-0001",
    avgPx: "0",
    clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    contract: {
      description: "Shelley Moore Capito",
      eventDisplayName: "West Virginia Senate General Election November 3 2026",
      eventId: "AXXWV_110326",
      question:
        "Will Shelley Moore Capito win the West Virginia general election for US Senate in 2026?",
      settlementValue: "1",
      state: "ACTIVE",
    },
    createdAt: new Date("2025-08-01T16:09:00.156Z"),
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
    updatedAt: new Date("2024-09-09T23:40:00.384Z"),
    workingPrice: "0.54",
    workingQuantity: "10",
  },
  reports: [
    {
      avgPx: "0.54",
      cumQty: "10",
      execId: "<id>",
      execType: "trade",
      lastPx: "0.54",
      lastQty: "10",
      leavesQty: "0",
      status: "filled",
      transactTime: new Date("2025-03-14T08:15:42.300Z"),
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `events`                                                                                                                                                                                                                                       | [models.PredOrdersOrderEvent](../models/pred-orders-order-event.md)[]                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                             | Every step of the order's history, in version order.                                                                                                                                                                                           |
| `order`                                                                                                                                                                                                                                        | [models.PredOrdersOrder](../models/pred-orders-order.md)                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                             | An order as recorded by order entry. Submitted terms (`quantity`, `price`, …) never change; working terms (`workingQuantity`, `workingPrice`, …) are the venue's answer. Optional decimals and timestamps are omitted when absent, never zero. |
| `reports`                                                                                                                                                                                                                                      | [models.PredOrdersOrderReport](../models/pred-orders-order-report.md)[]                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                             | N/A                                                                                                                                                                                                                                            |