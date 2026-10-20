# GetAccountPositionsRequest

## Example Usage

```typescript
import { GetAccountPositionsRequest } from "finance-dev/models/operations";

let value: GetAccountPositionsRequest = {
  id: "TEST-ACCOUNT-001",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                        | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Account whose positions you want to read. Enter the account ID from [User Accounts](/api-reference/accounts/user-accounts). | TEST-ACCOUNT-001                                                                                                            |