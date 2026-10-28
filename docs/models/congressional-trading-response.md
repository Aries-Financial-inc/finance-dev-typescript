# CongressionalTradingResponse

Stock transactions disclosed by members of US Congress for a company, as provided by Finnhub.

## Example Usage

```typescript
import { CongressionalTradingResponse } from "@ariesdotcom/finance-dev/models";

let value: CongressionalTradingResponse = {};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `data`                                                                                        | [models.CongressionalTradingResponseData](../models/congressional-trading-response-data.md)[] | :heavy_minus_sign:                                                                            | Congressional transaction disclosures for the symbol.                                         |
| `symbol`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Company ticker symbol.                                                                        |