# InsiderTransactionsResponse

Response containing insider trading transactions.

## Example Usage

```typescript
import { InsiderTransactionsResponse } from "@ariesdotcom/finance-dev/models";

let value: InsiderTransactionsResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `transactions`                                                  | [models.InsiderTransaction](../models/insider-transaction.md)[] | :heavy_minus_sign:                                              | List of insider trading transactions                            |