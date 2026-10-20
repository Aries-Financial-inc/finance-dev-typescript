# GetStockPreviousDayRequest

## Example Usage

```typescript
import { GetStockPreviousDayRequest } from "finance-dev/models/operations";

let value: GetStockPreviousDayRequest = {
  ticker: "AAPL",
  adjusted: true,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `ticker`                                                                                                              | *string*                                                                                                              | :heavy_check_mark:                                                                                                    | Stock ticker symbol, such as AAPL. Use the exact ticker for the company you want to research.                         | AAPL                                                                                                                  |
| `adjusted`                                                                                                            | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | Whether to adjust historical prices for stock splits. Use true for normalized charting and false for raw market data. | true                                                                                                                  |