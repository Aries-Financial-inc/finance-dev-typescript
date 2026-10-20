# IndexBarResponseIndex

Index metadata and identification

## Example Usage

```typescript
import { IndexBarResponseIndex } from "finance-dev/models";

let value: IndexBarResponseIndex = {};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `currency`                                             | *string*                                               | :heavy_minus_sign:                                     | Currency in which the index is quoted (e.g., USD, EUR) |
| `indexGroup`                                           | *string*                                               | :heavy_minus_sign:                                     | Index group classification identifier                  |
| `indexName`                                            | *string*                                               | :heavy_minus_sign:                                     | Full name of the index (e.g., S&P 500, Dow Jones)      |
| `symbol`                                               | *string*                                               | :heavy_minus_sign:                                     | Index ticker symbol (e.g., SPX, DJI)                   |
| `valoren`                                              | *string*                                               | :heavy_minus_sign:                                     | Swiss securities identification number (Valoren)       |