# GetStockOpenCloseRequest

## Example Usage

```typescript
import { GetStockOpenCloseRequest } from "finance-dev/models/operations";

let value: GetStockOpenCloseRequest = {
  ticker: "AAPL",
  date: new Date("2024-01-15"),
  adjusted: true,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `ticker`                                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Stock ticker symbol, such as AAPL. Use the exact ticker for the company you want to research.                         | AAPL                                                                                                                  |
| `date`                                                                                                                | [Date](../../types/rfcdate.md)                                                                                        | :heavy_check_mark:                                                                                                    | Date in YYYY-MM-DD format. Enter the specific calendar date you want to query.                                        | 2024-01-15                                                                                                            |
| `adjusted`                                                                                                            | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | Whether to adjust historical prices for stock splits. Use true for normalized charting and false for raw market data. | true                                                                                                                  |