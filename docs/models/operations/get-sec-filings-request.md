# GetSecFilingsRequest

## Example Usage

```typescript
import { GetSecFilingsRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetSecFilingsRequest = {
  symbol: "AAPL",
  form: "10-K",
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `symbol`                                                                                 | *string*                                                                                 | :heavy_minus_sign:                                                                       | Stock symbol (optional if cik provided)                                                  | AAPL                                                                                     |
| `cik`                                                                                    | *string*                                                                                 | :heavy_minus_sign:                                                                       | Central Index Key (optional if symbol provided)                                          |                                                                                          |
| `accessNumber`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | SEC access number to filter by specific filing                                           |                                                                                          |
| `form`                                                                                   | *string*                                                                                 | :heavy_minus_sign:                                                                       | Form type (e.g. 10-K, 10-Q, 8-K, DEF 14A)                                                | 10-K                                                                                     |
| `from`                                                                                   | [Date](../../types/rfcdate.md)                                                           | :heavy_minus_sign:                                                                       | Start date in YYYY-MM-DD format. Enter the first date to include in the research window. |                                                                                          |
| `to`                                                                                     | [Date](../../types/rfcdate.md)                                                           | :heavy_minus_sign:                                                                       | End date in YYYY-MM-DD format. Enter the last date to include in the research window.    |                                                                                          |