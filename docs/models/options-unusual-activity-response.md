# OptionsUnusualActivityResponse

Response for GET /v1/options/unusual_activity/{symbol}. Contains unusual activity trades and optional pagination pointer.

## Example Usage

```typescript
import { OptionsUnusualActivityResponse } from "finance-dev/models";

let value: OptionsUnusualActivityResponse = {
  trades: [
    {
      type: "block",
    },
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `nextPage`                                                                          | *string*                                                                            | :heavy_minus_sign:                                                                  | Absolute link to the next page when more results are available.                     |
| `trades`                                                                            | [models.OptionsUnusualActivityTrade](../models/options-unusual-activity-trade.md)[] | :heavy_minus_sign:                                                                  | List of unusual options activity trades                                             |