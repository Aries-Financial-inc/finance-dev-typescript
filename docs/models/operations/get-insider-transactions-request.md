# GetInsiderTransactionsRequest

## Example Usage

```typescript
import { GetInsiderTransactionsRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetInsiderTransactionsRequest = {
  symbol: "<value>",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `symbol`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | Stock symbol, such as AAPL. Use it to narrow results to one company.           |
| `from`                                                                         | [Date](../../types/rfcdate.md)                                                 | :heavy_minus_sign:                                                             | Optional start date in YYYY-MM-DD format. Use it to begin the research window. |
| `to`                                                                           | [Date](../../types/rfcdate.md)                                                 | :heavy_minus_sign:                                                             | Optional end date in YYYY-MM-DD format. Use it to end the research window.     |