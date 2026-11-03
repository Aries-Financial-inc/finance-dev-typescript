# ListPredictionMassCancelsResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { ListPredictionMassCancelsResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: ListPredictionMassCancelsResponse = {
  success: true,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [models.PredOrdersMassCancelPage](../../models/pred-orders-mass-cancel-page.md) | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `success`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             | true                                                                            |