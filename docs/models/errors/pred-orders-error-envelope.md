# PredOrdersErrorEnvelope

Invalid request. `INVALID_ORDER` carries the reason in `message`; on placement this includes refusals from order entry and the venue (price, tick size, account setup).

## Example Usage

```typescript
import { PredOrdersErrorEnvelope } from "@ariesdotcom/finance-dev/models/errors";

// No examples available for this model
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         | Example                                                             |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `error`                                                             | [models.PredOrdersAppError](../../models/pred-orders-app-error.md)  | :heavy_check_mark:                                                  | Structured error returned by the prediction-market order endpoints. |                                                                     |
| `success`                                                           | *boolean*                                                           | :heavy_check_mark:                                                  | N/A                                                                 | false                                                               |