# UsaSpendingResponse

US government contract awards to a company, as provided by Finnhub.

## Example Usage

```typescript
import { UsaSpendingResponse } from "finance-dev/models";

let value: UsaSpendingResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [models.UsaSpendingResponseData](../models/usa-spending-response-data.md)[] | :heavy_minus_sign:                                                          | Government spending (award) records for the symbol.                         |
| `symbol`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Company ticker symbol.                                                      |