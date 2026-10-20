# LastQuote

Last quote information

## Example Usage

```typescript
import { LastQuote } from "finance-dev/models";

let value: LastQuote = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `askPrice`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Ask price of the last quote.                                          |
| `askSize`                                                             | *number*                                                              | :heavy_minus_sign:                                                    | Ask size of the last quote.                                           |
| `bidPrice`                                                            | *number*                                                              | :heavy_minus_sign:                                                    | Bid price of the last quote.                                          |
| `bidSize`                                                             | *number*                                                              | :heavy_minus_sign:                                                    | Bid size of the last quote.                                           |
| `timestamp`                                                           | *number*                                                              | :heavy_minus_sign:                                                    | Timestamp of the last quote as an integer from the upstream provider. |