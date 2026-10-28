# GetAccountBalanceRequest

## Example Usage

```typescript
import { GetAccountBalanceRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetAccountBalanceRequest = {
  id: "TEST-ACCOUNT-001",
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    | Example                                                                                        |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | Account whose balance you want to read. Enter the account ID from `GET /v1/users/me/accounts`. | TEST-ACCOUNT-001                                                                               |