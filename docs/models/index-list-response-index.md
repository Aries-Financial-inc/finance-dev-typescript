# IndexListResponseIndex

## Example Usage

```typescript
import { IndexListResponseIndex } from "finance-dev/models";

let value: IndexListResponseIndex = {
  currency: "USD",
  indexGroup: "IND_CBOM",
  indexName: "S&P 500",
  symbol: "SPX",
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `currency`              | *string*                | :heavy_minus_sign:      | Currency of the index   | USD                     |
| `indexGroup`            | *string*                | :heavy_minus_sign:      | Index group identifier  | IND_CBOM                |
| `indexName`             | *string*                | :heavy_minus_sign:      | Index name              | S&P 500                 |
| `symbol`                | *string*                | :heavy_minus_sign:      | Index symbol identifier | SPX                     |