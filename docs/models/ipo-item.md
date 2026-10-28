# IpoItem

A single IPO calendar entry.

## Example Usage

```typescript
import { IpoItem } from "@ariesdotcom/finance-dev/models";

let value: IpoItem = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `date`                                           | *string*                                         | :heavy_minus_sign:                               | Expected or actual IPO date in YYYY-MM-DD format |
| `exchange`                                       | *string*                                         | :heavy_minus_sign:                               | Stock exchange where the IPO will list           |
| `name`                                           | *string*                                         | :heavy_minus_sign:                               | Company name                                     |
| `priceFrom`                                      | *number*                                         | :heavy_minus_sign:                               | Minimum price per share in the IPO price range   |
| `priceTo`                                        | *number*                                         | :heavy_minus_sign:                               | Maximum price per share in the IPO price range   |
| `status`                                         | *string*                                         | :heavy_minus_sign:                               | IPO status (expected, priced, filed, withdrawn)  |
| `symbol`                                         | *string*                                         | :heavy_minus_sign:                               | Stock ticker symbol for the IPO                  |
| `totalSharesValue`                               | *number*                                         | :heavy_minus_sign:                               | Total value of shares offered in the IPO         |