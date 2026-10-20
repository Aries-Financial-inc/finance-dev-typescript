# GetPredictionOrderRequest

## Example Usage

```typescript
import { GetPredictionOrderRequest } from "finance-dev/models/operations";

let value: GetPredictionOrderRequest = {
  orderId: "d149e539-20c7-46c4-b31e-9e8fe27fb67e",
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `orderId`                                                               | *string*                                                                | :heavy_check_mark:                                                      | `orderId` returned by Place Prediction Order or List Prediction Orders. |