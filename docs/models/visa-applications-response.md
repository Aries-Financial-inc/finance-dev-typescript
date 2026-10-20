# VisaApplicationsResponse

H-1B and permanent visa applications filed by a company, as provided by Finnhub.

## Example Usage

```typescript
import { VisaApplicationsResponse } from "finance-dev/models";

let value: VisaApplicationsResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [models.VisaApplicationsResponseData](../models/visa-applications-response-data.md)[] | :heavy_minus_sign:                                                                    | Visa application records for the symbol.                                              |
| `symbol`                                                                              | *string*                                                                              | :heavy_minus_sign:                                                                    | Company ticker symbol.                                                                |