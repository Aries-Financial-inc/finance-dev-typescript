# GetPredictionMassCancelRequest

## Example Usage

```typescript
import { GetPredictionMassCancelRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetPredictionMassCancelRequest = {
  massCancelId: "fdc1b831-5f42-4990-b20f-f94cf1996ba3",
  accountId: "ACCOUNT-0001",
};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               | Example                                   |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `massCancelId`                            | *string*                                  | :heavy_check_mark:                        | N/A                                       |                                           |
| `accountId`                               | *string*                                  | :heavy_check_mark:                        | The account the mass cancel was sent for. | ACCOUNT-0001                              |