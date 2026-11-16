# CancelPredictionOrderRequest

## Example Usage

```typescript
import { CancelPredictionOrderRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: CancelPredictionOrderRequest = {
  orderId: "76032a89-5d5e-468b-8d8b-59682b28d5b7",
  body: {
    accountId: "ACCOUNT-0001",
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `orderId`                                                                               | *string*                                                                                | :heavy_check_mark:                                                                      | `orderId` returned by Place Prediction Order or List Prediction Orders.                 |
| `body`                                                                                  | [models.PredOrdersCancelOrderRequest](../../models/pred-orders-cancel-order-request.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |