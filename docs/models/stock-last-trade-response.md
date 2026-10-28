# StockLastTradeResponse

Most recent trade for a stock ticker.

## Example Usage

```typescript
import { StockLastTradeResponse } from "@ariesdotcom/finance-dev/models";

let value: StockLastTradeResponse = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Unique request ID                                                                                                                                                     |
| `results`                                                                                                                                                             | [models.StockLastTradeResponseResults](../models/stock-last-trade-response-results.md)                                                                                | :heavy_minus_sign:                                                                                                                                                    | Last trade object                                                                                                                                                     |
| `status`                                                                                                                                                              | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Status string from the upstream data provider — typically `OK` for a successful response. Treat any other value as an error indicator alongside the HTTP status code. |