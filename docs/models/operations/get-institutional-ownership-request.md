# GetInstitutionalOwnershipRequest

## Example Usage

```typescript
import { GetInstitutionalOwnershipRequest } from "finance-dev/models/operations";

let value: GetInstitutionalOwnershipRequest = {
  cusip: "023135106",
  from: new Date("2024-01-01"),
  to: new Date("2024-12-31"),
  symbol: "TSLA",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `cusip`                                                                                     | *string*                                                                                    | :heavy_check_mark:                                                                          | CUSIP security identifier for the security you want institutional ownership for.            | 023135106                                                                                   |
| `from`                                                                                      | [Date](../../types/rfcdate.md)                                                              | :heavy_check_mark:                                                                          | Start date in YYYY-MM-DD format. Enter the first date to include in the research window.    | 2024-01-01                                                                                  |
| `to`                                                                                        | [Date](../../types/rfcdate.md)                                                              | :heavy_check_mark:                                                                          | End date in YYYY-MM-DD format. Enter the last date to include in the research window.       | 2024-12-31                                                                                  |
| `symbol`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | Optional stock ticker symbol filter, such as AAPL. Use it to narrow results to one company. | TSLA                                                                                        |