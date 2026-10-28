# GetStockLastQuoteRequest

## Example Usage

```typescript
import { GetStockLastQuoteRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetStockLastQuoteRequest = {
  ticker: "AAPL",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ticker`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Stock ticker symbol, such as AAPL. Use the exact ticker for the company you want to research. | AAPL                                                                                          |