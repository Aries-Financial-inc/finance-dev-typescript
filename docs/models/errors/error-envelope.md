# ErrorEnvelope

Prediction-market error envelope. Returned by historical-data and prediction-market reference endpoints on 400/404/500/502.

## Example Usage

```typescript
import { ErrorEnvelope } from "finance-dev/models/errors";

// No examples available for this model
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `error`                                                          | [models.AppError](../../models/app-error.md)                     | :heavy_check_mark:                                               | Structured application error returned inside an `ErrorEnvelope`. |                                                                  |
| `success`                                                        | *boolean*                                                        | :heavy_check_mark:                                               | N/A                                                              | false                                                            |