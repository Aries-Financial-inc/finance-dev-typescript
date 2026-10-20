# GetEarningsSurprisesRequest

## Example Usage

```typescript
import { GetEarningsSurprisesRequest } from "finance-dev/models/operations";

let value: GetEarningsSurprisesRequest = {
  symbol: "AAPL",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                            | *string*                                                                                                                            | :heavy_check_mark:                                                                                                                  | Stock ticker to query. Send the plain uppercase symbol exactly as you'd type it on a brokerage screen, e.g. `AAPL`, `MSFT`, `TSLA`. | AAPL                                                                                                                                |
| `limit`                                                                                                                             | *number*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | (Optional) Number of results to return                                                                                              |                                                                                                                                     |