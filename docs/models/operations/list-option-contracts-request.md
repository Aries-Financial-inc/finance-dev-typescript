# ListOptionContractsRequest

## Example Usage

```typescript
import { ListOptionContractsRequest } from "finance-dev/models/operations";

let value: ListOptionContractsRequest = {
  symbol: "<value>",
  expiryDate: new Date("2025-05-23"),
};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `symbol`                                            | *string*                                            | :heavy_check_mark:                                  | The underlying stock symbol (e.g., AAPL, TSLA, SPY) |
| `expiryDate`                                        | [Date](../../types/rfcdate.md)                      | :heavy_check_mark:                                  | The expiration date in YYYY-MM-DD format            |