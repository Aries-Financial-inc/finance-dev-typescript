# GetQuotesRequest

## Example Usage

```typescript
import { GetQuotesRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetQuotesRequest = {
  symbols: "AAPL,GOOGL,MSFT",
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               | Example                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `symbols`                                                                                                                                 | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Comma-separated symbols to quote, such as `AAPL,MSFT`. Use one symbol for a quote tile or multiple symbols for watchlists and dashboards. | AAPL,GOOGL,MSFT                                                                                                                           |