# LobbyingResponseData

## Example Usage

```typescript
import { LobbyingResponseData } from "@ariesdotcom/finance-dev/models";

let value: LobbyingResponseData = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `clientId`                                       | *string*                                         | :heavy_minus_sign:                               | Client identifier.                               |
| `country`                                        | *string*                                         | :heavy_minus_sign:                               | Country.                                         |
| `date`                                           | *string*                                         | :heavy_minus_sign:                               | Date of the filing, as returned by the provider. |
| `description`                                    | *string*                                         | :heavy_minus_sign:                               | Description of the lobbying activity.            |
| `documentUrl`                                    | *string*                                         | :heavy_minus_sign:                               | URL of the source filing document.               |
| `expenses`                                       | *number*                                         | :heavy_minus_sign:                               | Expenses reported by the company.                |
| `houseregistrantId`                              | *string*                                         | :heavy_minus_sign:                               | House registrant identifier.                     |
| `income`                                         | *number*                                         | :heavy_minus_sign:                               | Income reported by lobbying firms.               |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | Company name.                                    |
| `period`                                         | *string*                                         | :heavy_minus_sign:                               | Filing period.                                   |
| `postedName`                                     | *string*                                         | :heavy_minus_sign:                               | Posted name on the filing.                       |
| `registrantId`                                   | *string*                                         | :heavy_minus_sign:                               | Registrant identifier.                           |
| `senateId`                                       | *string*                                         | :heavy_minus_sign:                               | Senate identifier.                               |
| `symbol`                                         | *string*                                         | :heavy_minus_sign:                               | Company ticker symbol.                           |
| `year`                                           | *number*                                         | :heavy_minus_sign:                               | Year of the filing.                              |