# GetStockLastTradeRequest

## Example Usage

```typescript
import { GetStockLastTradeRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetStockLastTradeRequest = {
  ticker: "AAPL",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `ticker`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Stock ticker symbol, such as AAPL. Use the exact ticker for the company you want to research. | AAPL                                                                                          |