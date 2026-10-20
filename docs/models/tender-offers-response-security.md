# TenderOffersResponseSecurity

Security the tender offers relate to

## Example Usage

```typescript
import { TenderOffersResponseSecurity } from "finance-dev/models";

let value: TenderOffersResponseSecurity = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `cik`                                                     | *string*                                                  | :heavy_minus_sign:                                        | SEC Central Index Key (CIK) of the issuer                 |
| `compositeFigi`                                           | *string*                                                  | :heavy_minus_sign:                                        | Composite FIGI of the security                            |
| `cusip`                                                   | *string*                                                  | :heavy_minus_sign:                                        | CUSIP of the security                                     |
| `figi`                                                    | *string*                                                  | :heavy_minus_sign:                                        | FIGI of the security                                      |
| `industry`                                                | *string*                                                  | :heavy_minus_sign:                                        | Industry of the issuer                                    |
| `instrumentClass`                                         | *string*                                                  | :heavy_minus_sign:                                        | Instrument class of the security                          |
| `isin`                                                    | *string*                                                  | :heavy_minus_sign:                                        | ISIN of the security                                      |
| `market`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Market the security trades on                             |
| `marketIdentificationCode`                                | *string*                                                  | :heavy_minus_sign:                                        | Market Identification Code (MIC) of the security's market |
| `name`                                                    | *string*                                                  | :heavy_minus_sign:                                        | Name of the security                                      |
| `sector`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Sector of the issuer                                      |
| `sedol`                                                   | *string*                                                  | :heavy_minus_sign:                                        | SEDOL of the security                                     |
| `symbol`                                                  | *string*                                                  | :heavy_minus_sign:                                        | Ticker symbol of the security                             |
| `valoren`                                                 | *string*                                                  | :heavy_minus_sign:                                        | Valoren number of the security                            |