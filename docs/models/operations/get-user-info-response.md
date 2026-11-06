# GetUserInfoResponse

## Example Usage

```typescript
import { GetUserInfoResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: GetUserInfoResponse = {
  headers: {},
  result: {
    email: "user@example.com",
    id: 12345,
  },
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `headers`                                                     | Record<string, *string*[]>                                    | :heavy_check_mark:                                            | N/A                                                           |
| `result`                                                      | [models.UserInfoResponse](../../models/user-info-response.md) | :heavy_check_mark:                                            | N/A                                                           |