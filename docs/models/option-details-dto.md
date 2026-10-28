# OptionDetailsDTO

One option contract's pricing snapshot from GET /v1/marketdata/options/details. Numeric prices are returned as JSON numbers.

## Example Usage

```typescript
import { OptionDetailsDTO } from "@ariesdotcom/finance-dev/models";

let value: OptionDetailsDTO = {
  askPrice: 80.9,
  bidPrice: 78.05,
  closePrice: 93.5,
  lastPrice: 79.76,
  midPrice: 79.475,
  symbol: "GOOG270115C00285000",
};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              | Example                                  |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `askPrice`                               | *number*                                 | :heavy_minus_sign:                       | Current best ask price.                  | 80.9                                     |
| `bidPrice`                               | *number*                                 | :heavy_minus_sign:                       | Current best bid price.                  | 78.05                                    |
| `closePrice`                             | *number*                                 | :heavy_minus_sign:                       | Previous session's closing price.        | 93.5                                     |
| `lastPrice`                              | *number*                                 | :heavy_minus_sign:                       | Last traded price for the contract.      | 79.76                                    |
| `midPrice`                               | *number*                                 | :heavy_minus_sign:                       | Midpoint between the bid and ask prices. | 79.475                                   |
| `symbol`                                 | *string*                                 | :heavy_minus_sign:                       | OSI option symbol for the contract.      | GOOG270115C00285000                      |