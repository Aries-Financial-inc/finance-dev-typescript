# GetEquityDetailsRequest

## Example Usage

```typescript
import { GetEquityDetailsRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetEquityDetailsRequest = {
  symbols: "AAPL,MSFT",
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `symbols`                                                                                                                                            | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | One or more uppercase ticker symbols, separated by commas (e.g. `AAPL,MSFT,GOOGL`). Send at least one. The response order matches the request order. | AAPL,MSFT                                                                                                                                            |