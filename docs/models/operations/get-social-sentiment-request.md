# GetSocialSentimentRequest

## Example Usage

```typescript
import { GetSocialSentimentRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetSocialSentimentRequest = {
  symbol: "AAPL",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                    | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Stock ticker to query. Send the plain uppercase symbol exactly as you'd type it on a brokerage screen, e.g. `AAPL`, `MSFT`. | AAPL                                                                                                                        |
| `from`                                                                                                                      | [Date](../../types/rfcdate.md)                                                                                              | :heavy_minus_sign:                                                                                                          | Start of the date window, inclusive. Format: `YYYY-MM-DD` (e.g. `2024-01-01`).                                              |                                                                                                                             |
| `to`                                                                                                                        | [Date](../../types/rfcdate.md)                                                                                              | :heavy_minus_sign:                                                                                                          | End of the date window, inclusive. Format: `YYYY-MM-DD` (e.g. `2024-12-31`).                                                |                                                                                                                             |