# StockLastQuoteResponse

Most recent NBBO quote for a stock ticker.

## Example Usage

```typescript
import { StockLastQuoteResponse } from "finance-dev/models";

let value: StockLastQuoteResponse = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Unique request ID                                                                                                                                                     |
| `results`                                                                                                                                                             | [models.StockLastQuoteResponseResults](../models/stock-last-quote-response-results.md)                                                                                | :heavy_minus_sign:                                                                                                                                                    | Last NBBO quote object                                                                                                                                                |
| `status`                                                                                                                                                              | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Status string from the upstream data provider — typically `OK` for a successful response. Treat any other value as an error indicator alongside the HTTP status code. |