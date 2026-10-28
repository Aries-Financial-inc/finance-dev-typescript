# SupplyChainResponseData

## Example Usage

```typescript
import { SupplyChainResponseData } from "@ariesdotcom/finance-dev/models";

let value: SupplyChainResponseData = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `country`                                                     | *string*                                                      | :heavy_minus_sign:                                            | Country of the related company.                               |
| `customer`                                                    | *boolean*                                                     | :heavy_minus_sign:                                            | Whether the related company is a customer.                    |
| `industry`                                                    | *string*                                                      | :heavy_minus_sign:                                            | Industry of the related company.                              |
| `name`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Name of the related company.                                  |
| `oneMonthCorrelation`                                         | *number*                                                      | :heavy_minus_sign:                                            | Price correlation with the related company over one month.    |
| `oneYearCorrelation`                                          | *number*                                                      | :heavy_minus_sign:                                            | Price correlation with the related company over one year.     |
| `sixMonthCorrelation`                                         | *number*                                                      | :heavy_minus_sign:                                            | Price correlation with the related company over six months.   |
| `supplier`                                                    | *boolean*                                                     | :heavy_minus_sign:                                            | Whether the related company is a supplier.                    |
| `symbol`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Ticker symbol of the related company.                         |
| `threeMonthCorrelation`                                       | *number*                                                      | :heavy_minus_sign:                                            | Price correlation with the related company over three months. |
| `twoWeekCorrelation`                                          | *number*                                                      | :heavy_minus_sign:                                            | Price correlation with the related company over two weeks.    |
| `twoYearCorrelation`                                          | *number*                                                      | :heavy_minus_sign:                                            | Price correlation with the related company over two years.    |