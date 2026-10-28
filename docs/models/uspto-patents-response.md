# UsptoPatentsResponse

USPTO patent filings associated with a company, as provided by Finnhub.

## Example Usage

```typescript
import { UsptoPatentsResponse } from "@ariesdotcom/finance-dev/models";

let value: UsptoPatentsResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [models.UsptoPatentsResponseData](../models/uspto-patents-response-data.md)[] | :heavy_minus_sign:                                                            | Patent records for the symbol.                                                |
| `symbol`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Company ticker symbol.                                                        |