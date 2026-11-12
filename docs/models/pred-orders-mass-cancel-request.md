# PredOrdersMassCancelRequest

Unknown fields are rejected with `400`.

## Example Usage

```typescript
import { PredOrdersMassCancelRequest } from "@ariesdotcom/finance-dev/models";

let value: PredOrdersMassCancelRequest = {
  accountId: "ACCOUNT-0001",
  symbol: "HORC_1126_Republican",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `accountId`                                                                                       | *string*                                                                                          | :heavy_check_mark:                                                                                | The account whose working orders to cancel.                                                       | ACCOUNT-0001                                                                                      |
| `outcome`                                                                                         | [models.PredOrdersMassCancelRequestOutcome](../models/pred-orders-mass-cancel-request-outcome.md) | :heavy_minus_sign:                                                                                | Cancel only this outcome's orders. Requires `symbol`.                                             |                                                                                                   |
| `symbol`                                                                                          | *string*                                                                                          | :heavy_minus_sign:                                                                                | Cancel only orders in this contract. Omit to cancel every working order on the account.           | HORC_1126_Republican                                                                              |