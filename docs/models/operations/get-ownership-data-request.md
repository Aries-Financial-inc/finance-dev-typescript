# GetOwnershipDataRequest

## Example Usage

```typescript
import { GetOwnershipDataRequest } from "finance-dev/models/operations";

let value: GetOwnershipDataRequest = {
  symbol: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `symbol`                                                                                         | *string*                                                                                         | :heavy_check_mark:                                                                               | Stock symbol, such as AAPL. Use it to narrow results to one company.                             |
| `limit`                                                                                          | *number*                                                                                         | :heavy_minus_sign:                                                                               | Optional maximum number of results to return. Use it to keep ownership lists small for UI views. |