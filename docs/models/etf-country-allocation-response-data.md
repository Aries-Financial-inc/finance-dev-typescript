# EtfCountryAllocationResponseData

ETF country exposure payload.

## Example Usage

```typescript
import { EtfCountryAllocationResponseData } from "@ariesdotcom/finance-dev/models";

let value: EtfCountryAllocationResponseData = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `countryExposure`                                         | [models.CountryExposure](../models/country-exposure.md)[] | :heavy_minus_sign:                                        | List of country exposures for the ETF.                    |
| `symbol`                                                  | *string*                                                  | :heavy_minus_sign:                                        | ETF ticker symbol.                                        |