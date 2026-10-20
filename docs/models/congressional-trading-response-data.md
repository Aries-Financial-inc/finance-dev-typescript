# CongressionalTradingResponseData

## Example Usage

```typescript
import { CongressionalTradingResponseData } from "finance-dev/models";

let value: CongressionalTradingResponseData = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `amountFrom`                                                | *number*                                                    | :heavy_minus_sign:                                          | Lower bound of the reported transaction amount.             |
| `amountTo`                                                  | *number*                                                    | :heavy_minus_sign:                                          | Upper bound of the reported transaction amount.             |
| `assetName`                                                 | *string*                                                    | :heavy_minus_sign:                                          | Name of the asset.                                          |
| `filingDate`                                                | *string*                                                    | :heavy_minus_sign:                                          | Date the disclosure was filed, as returned by the provider. |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | Name of the representative.                                 |
| `ownerType`                                                 | *string*                                                    | :heavy_minus_sign:                                          | Type of owner of the asset.                                 |
| `position`                                                  | *string*                                                    | :heavy_minus_sign:                                          | Position of the representative.                             |
| `symbol`                                                    | *string*                                                    | :heavy_minus_sign:                                          | Company ticker symbol.                                      |
| `transactionDate`                                           | *string*                                                    | :heavy_minus_sign:                                          | Date of the transaction, as returned by the provider.       |
| `transactionType`                                           | *string*                                                    | :heavy_minus_sign:                                          | Type of transaction, such as Sale or Purchase.              |