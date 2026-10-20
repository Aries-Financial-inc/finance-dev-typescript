# PlacePredictionOrderRequest

## Example Usage

```typescript
import { PlacePredictionOrderRequest } from "finance-dev/models/operations";

let value: PlacePredictionOrderRequest = {
  idempotencyKey: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
  body: {
    accountId: "ACCOUNT-0001",
    clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    orderType: "limit",
    outcome: "YES",
    price: "0.54",
    quantity: "10",
    side: "buy",
    stopPx: "0.50",
    symbol: "HORC_1126_Republican",
    timeInForce: "day",
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                                             | Type                                                                                                                                                                                                                                                              | Required                                                                                                                                                                                                                                                          | Description                                                                                                                                                                                                                                                       | Example                                                                                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `idempotencyKey`                                                                                                                                                                                                                                                  | *string*                                                                                                                                                                                                                                                          | :heavy_minus_sign:                                                                                                                                                                                                                                                | Makes a retry safe. A placement repeating a key you already used returns the order that key placed and places nothing new. The same key with different order terms returns `400` `INVALID_ORDER`. Without it, every request is a new order. Send it at most once. | 7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11                                                                                                                                                                                                                              |
| `body`                                                                                                                                                                                                                                                            | [models.PredOrdersPlaceOrderRequest](../../models/pred-orders-place-order-request.md)                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                | N/A                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                   |