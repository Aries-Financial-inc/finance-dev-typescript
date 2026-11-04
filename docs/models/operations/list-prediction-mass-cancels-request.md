# ListPredictionMassCancelsRequest

## Example Usage

```typescript
import { ListPredictionMassCancelsRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: ListPredictionMassCancelsRequest = {
  accountId: "ACCOUNT-0001",
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `accountId`                                                   | *string*                                                      | :heavy_check_mark:                                            | The account. Every order on it is covered, whoever placed it. | ACCOUNT-0001                                                  |
| `limit`                                                       | *number*                                                      | :heavy_minus_sign:                                            | Mass cancels per page. Values above 200 are clamped to 200.   |                                                               |
| `cursor`                                                      | *string*                                                      | :heavy_minus_sign:                                            | `nextCursor` from the previous page.                          |                                                               |