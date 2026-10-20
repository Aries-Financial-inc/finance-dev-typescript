# GetOptionsActivityRequest

## Example Usage

```typescript
import { GetOptionsActivityRequest } from "finance-dev/models/operations";

let value: GetOptionsActivityRequest = {};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `dateFrom`                                                                                               | [Date](../../types/rfcdate.md)                                                                           | :heavy_minus_sign:                                                                                       | Start date for filtering options activity in YYYY-MM-DD format                                           |
| `dateTo`                                                                                                 | [Date](../../types/rfcdate.md)                                                                           | :heavy_minus_sign:                                                                                       | End date for filtering options activity in YYYY-MM-DD format                                             |
| `tickers`                                                                                                | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Comma-separated list of ticker symbols to filter results                                                 |
| `page`                                                                                                   | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Page number for pagination (zero-based)                                                                  |
| `pageSize`                                                                                               | *number*                                                                                                 | :heavy_minus_sign:                                                                                       | Number of results per page. Use this to control pagination size in list views. (default: 100, max: 1000) |