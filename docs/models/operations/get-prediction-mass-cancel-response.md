# GetPredictionMassCancelResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { GetPredictionMassCancelResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: GetPredictionMassCancelResponse = {
  success: true,
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                          | [models.PredOrdersMassCancel](../../models/pred-orders-mass-cancel.md)                                                          | :heavy_minus_sign:                                                                                                              | A mass cancel request and whether the venue accepted it. It does not list the orders canceled: each arrives as an order update. |                                                                                                                                 |
| `success`                                                                                                                       | *boolean*                                                                                                                       | :heavy_check_mark:                                                                                                              | N/A                                                                                                                             | true                                                                                                                            |