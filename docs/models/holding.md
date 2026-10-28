# Holding

## Example Usage

```typescript
import { Holding } from "@ariesdotcom/finance-dev/models";

let value: Holding = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `assetType`                                                  | *string*                                                     | :heavy_minus_sign:                                           | Asset type of the holding.                                   |
| `cusip`                                                      | *string*                                                     | :heavy_minus_sign:                                           | CUSIP identifier of the holding.                             |
| `isin`                                                       | *string*                                                     | :heavy_minus_sign:                                           | ISIN identifier of the holding.                              |
| `name`                                                       | *string*                                                     | :heavy_minus_sign:                                           | Name of the holding.                                         |
| `percent`                                                    | *number*                                                     | :heavy_minus_sign:                                           | Portfolio weight of the holding as reported by the provider. |
| `share`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Number of shares held.                                       |
| `symbol`                                                     | *string*                                                     | :heavy_minus_sign:                                           | Ticker symbol of the holding.                                |
| `value`                                                      | *number*                                                     | :heavy_minus_sign:                                           | Market value of the holding as reported by the provider.     |