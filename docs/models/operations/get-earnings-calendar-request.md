# GetEarningsCalendarRequest

## Example Usage

```typescript
import { GetEarningsCalendarRequest } from "finance-dev/models/operations";

let value: GetEarningsCalendarRequest = {
  from: new Date("2024-01-01"),
  to: new Date("2024-01-31"),
  symbol: "AAPL",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `from`                                                                                      | [Date](../../types/rfcdate.md)                                                              | :heavy_check_mark:                                                                          | Start date in YYYY-MM-DD format. Enter the first date to include in the research window.    | 2024-01-01                                                                                  |
| `to`                                                                                        | [Date](../../types/rfcdate.md)                                                              | :heavy_check_mark:                                                                          | End date in YYYY-MM-DD format. Enter the last date to include in the research window.       | 2024-01-31                                                                                  |
| `symbol`                                                                                    | *string*                                                                                    | :heavy_minus_sign:                                                                          | Optional stock symbol to filter results. If not provided, returns earnings for all symbols. | AAPL                                                                                        |