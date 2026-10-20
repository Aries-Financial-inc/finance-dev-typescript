# PredOrdersAppError

Structured error returned by the prediction-market order endpoints.

## Example Usage

```typescript
import { PredOrdersAppError } from "finance-dev/models";

let value: PredOrdersAppError = {
  code: "INVALID_ORDER",
  message: "string",
  type: "bad_request",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `code`                                                                                | *string*                                                                              | :heavy_check_mark:                                                                    | Machine-readable code, e.g. `INVALID_ORDER`, `ORDER_OUTCOME_UNKNOWN`. Branch on this. | INVALID_ORDER                                                                         |
| `details`                                                                             | Record<string, *any*>                                                                 | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `message`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Human-readable detail. Exact text is not fixed and should not be matched on.          | string                                                                                |
| `requestId`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | N/A                                                                                   |                                                                                       |
| `type`                                                                                | [models.PredOrdersAppErrorType](../models/pred-orders-app-error-type.md)              | :heavy_check_mark:                                                                    | Categorical error type, in lowercase.                                                 | bad_request                                                                           |