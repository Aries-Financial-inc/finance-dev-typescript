# EarningsSurprisesResponse

Historical quarterly earnings results versus analyst estimates for a stock, sourced from Finnhub.

## Example Usage

```typescript
import { EarningsSurprisesResponse } from "@ariesdotcom/finance-dev/models";

let value: EarningsSurprisesResponse = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `earningSurprises`                                        | [models.EarningSurprise](../models/earning-surprise.md)[] | :heavy_minus_sign:                                        | List of quarterly earnings surprise records               |