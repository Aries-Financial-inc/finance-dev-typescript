# ReplacePredictionOrderRequest

## Example Usage

```typescript
import { ReplacePredictionOrderRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: ReplacePredictionOrderRequest = {
  orderId: "fbc46f7a-f665-4e2a-b5b6-1536fc71ce25",
  body: {
    accountId: "ACCOUNT-0001",
    price: "0.45",
    quantity: "20",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `orderId`                                                                                 | *string*                                                                                  | :heavy_check_mark:                                                                        | `orderId` returned by Place Prediction Order or List Prediction Orders.                   |
| `body`                                                                                    | [models.PredOrdersReplaceOrderRequest](../../models/pred-orders-replace-order-request.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |