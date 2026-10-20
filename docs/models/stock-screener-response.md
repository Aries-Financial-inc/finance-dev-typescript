# StockScreenerResponse

## Example Usage

```typescript
import { StockScreenerResponse } from "finance-dev/models";

let value: StockScreenerResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [models.StockScreenerResponseData](../models/stock-screener-response-data.md)[]       | :heavy_minus_sign:                                                                    | Screened data-tag values (e.g. pricetoearnings, marketcap)                            |
| `security`                                                                            | [models.StockScreenerResponseSecurity](../models/stock-screener-response-security.md) | :heavy_minus_sign:                                                                    | Security identity and metadata                                                        |