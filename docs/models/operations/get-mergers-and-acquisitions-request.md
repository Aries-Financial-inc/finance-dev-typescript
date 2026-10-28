# GetMergersAndAcquisitionsRequest

## Example Usage

```typescript
import { GetMergersAndAcquisitionsRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetMergersAndAcquisitionsRequest = {
  dateFrom: new Date("2024-01-01"),
  dateTo: new Date("2024-12-31"),
  tickers: "AAPL,MSFT",
  page: 0,
  pageSize: 50,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      | Example                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `dateFrom`                                                                                                       | [Date](../../types/rfcdate.md)                                                                                   | :heavy_minus_sign:                                                                                               | Start date in YYYY-MM-DD format. Enter the first date to include in the research window.                         | 2024-01-01                                                                                                       |
| `dateTo`                                                                                                         | [Date](../../types/rfcdate.md)                                                                                   | :heavy_minus_sign:                                                                                               | End date in YYYY-MM-DD format. Enter the last date to include in the research window.                            | 2024-12-31                                                                                                       |
| `tickers`                                                                                                        | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | Comma-separated ticker symbols, such as AAPL,MSFT. Use this to request or filter multiple companies in one call. | AAPL,MSFT                                                                                                        |
| `page`                                                                                                           | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Zero-based page offset. Enter 0 for the first page of results.                                                   | 0                                                                                                                |
| `pageSize`                                                                                                       | *number*                                                                                                         | :heavy_minus_sign:                                                                                               | Number of results per page. Use this to control pagination size in list views. (1-1000)                          | 50                                                                                                               |