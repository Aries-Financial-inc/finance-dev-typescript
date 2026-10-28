# Profile

Descriptive and fundamental attributes of the ETF.

## Example Usage

```typescript
import { Profile } from "@ariesdotcom/finance-dev/models";

let value: Profile = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `assetClass`                                             | *string*                                                 | :heavy_minus_sign:                                       | Asset class of the ETF.                                  |
| `aum`                                                    | *number*                                                 | :heavy_minus_sign:                                       | Assets under management of the ETF.                      |
| `avgVolume`                                              | *number*                                                 | :heavy_minus_sign:                                       | Average trading volume of the ETF.                       |
| `cusip`                                                  | *string*                                                 | :heavy_minus_sign:                                       | CUSIP identifier of the ETF.                             |
| `description`                                            | *string*                                                 | :heavy_minus_sign:                                       | Text description of the ETF.                             |
| `domicile`                                               | *string*                                                 | :heavy_minus_sign:                                       | Domicile of the ETF.                                     |
| `etfCompany`                                             | *string*                                                 | :heavy_minus_sign:                                       | Company that manages or issues the ETF.                  |
| `expenseRatio`                                           | *number*                                                 | :heavy_minus_sign:                                       | Expense ratio of the ETF.                                |
| `inceptionDate`                                          | *string*                                                 | :heavy_minus_sign:                                       | Inception date of the ETF as a string from the provider. |
| `investmentSegment`                                      | *string*                                                 | :heavy_minus_sign:                                       | Investment segment of the ETF.                           |
| `isin`                                                   | *string*                                                 | :heavy_minus_sign:                                       | ISIN identifier of the ETF.                              |
| `logo`                                                   | *string*                                                 | :heavy_minus_sign:                                       | URL of the ETF logo image.                               |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Name of the ETF.                                         |
| `nav`                                                    | *number*                                                 | :heavy_minus_sign:                                       | Net asset value of the ETF.                              |
| `navCurrency`                                            | *string*                                                 | :heavy_minus_sign:                                       | Currency in which the net asset value is quoted.         |
| `priceToBook`                                            | *number*                                                 | :heavy_minus_sign:                                       | Price-to-book ratio of the ETF.                          |
| `priceToEarnings`                                        | *number*                                                 | :heavy_minus_sign:                                       | Price-to-earnings ratio of the ETF.                      |
| `trackingIndex`                                          | *string*                                                 | :heavy_minus_sign:                                       | Index tracked by the ETF.                                |
| `website`                                                | *string*                                                 | :heavy_minus_sign:                                       | URL of the ETF website.                                  |