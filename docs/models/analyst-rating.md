# AnalystRating

Analyst ratings summary

## Example Usage

```typescript
import { AnalystRating } from "finance-dev/models";

let value: AnalystRating = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `averageReturn`                                 | *string*                                        | :heavy_minus_sign:                              | Average return based on analyst recommendations |
| `currentRating`                                 | *string*                                        | :heavy_minus_sign:                              | Current analyst rating (e.g., Buy, Sell, Hold)  |
| `priceTarget`                                   | *number*                                        | :heavy_minus_sign:                              | Average price target                            |
| `successRate`                                   | *string*                                        | :heavy_minus_sign:                              | Historical success rate of analysts             |
| `totalRatings`                                  | *number*                                        | :heavy_minus_sign:                              | Total number of analyst ratings                 |