# GetPositionsResponse

Response for GET /v1/accounts/{id}/positions. Cached positions for the account. Numeric amounts are returned as decimal strings.

## Example Usage

```typescript
import { GetPositionsResponse } from "finance-dev/models";

let value: GetPositionsResponse = {
  positions: [
    {
      accountId: "TEST-ACCOUNT-001",
      averagePrice: "170.25",
      createdAt: new Date("2026-01-10T16:00:00Z"),
      quantity: "100",
      securityType: "EQUITY",
      symbol: "AAPL",
      todayPl: "125.00",
      todayRealizedPnL: "0",
      unrealizedPl: "515.00",
    },
  ],
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `positions`                                               | [models.AccountPosition](../models/account-position.md)[] | :heavy_minus_sign:                                        | Open positions for the account                            |