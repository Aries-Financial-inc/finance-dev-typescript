# PredOrdersCancelOrderRequest

Unknown fields are rejected with `400`.

## Example Usage

```typescript
import { PredOrdersCancelOrderRequest } from "@ariesdotcom/finance-dev/models";

let value: PredOrdersCancelOrderRequest = {
  accountId: "ACCOUNT-0001",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `accountId`                                                                              | *string*                                                                                 | :heavy_check_mark:                                                                       | The account the order is on. Requests act on the account; you are recorded as who asked. | ACCOUNT-0001                                                                             |