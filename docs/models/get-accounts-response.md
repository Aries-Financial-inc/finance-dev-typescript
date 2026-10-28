# GetAccountsResponse

Response for GET /v2/users/me/accounts

## Example Usage

```typescript
import { GetAccountsResponse } from "@ariesdotcom/finance-dev/models";

let value: GetAccountsResponse = {
  accounts: [],
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `accounts`                                        | [models.AccountItem](../models/account-item.md)[] | :heavy_check_mark:                                | Trading accounts linked to the authenticated user |