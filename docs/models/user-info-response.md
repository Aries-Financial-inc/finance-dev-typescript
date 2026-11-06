# UserInfoResponse

Basic information about the authenticated user.

## Example Usage

```typescript
import { UserInfoResponse } from "@ariesdotcom/finance-dev/models";

let value: UserInfoResponse = {
  email: "user@example.com",
  id: 12345,
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      | Example                                          |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `email`                                          | *string*                                         | :heavy_check_mark:                               | Current email address stored on the user record. | user@example.com                                 |
| `id`                                             | *number*                                         | :heavy_check_mark:                               | Numeric user ID.                                 | 12345                                            |