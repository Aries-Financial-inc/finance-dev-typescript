# GetLobbyingRequest

## Example Usage

```typescript
import { GetLobbyingRequest } from "finance-dev/models/operations";

let value: GetLobbyingRequest = {
  symbol: "AAPL",
  from: new Date("2024-01-01"),
  to: new Date("2024-12-31"),
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                    | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Stock ticker to query. Send the plain uppercase symbol exactly as you'd type it on a brokerage screen, e.g. `AAPL`, `MSFT`. | AAPL                                                                                                                        |
| `from`                                                                                                                      | [Date](../../types/rfcdate.md)                                                                                              | :heavy_check_mark:                                                                                                          | Start of the date window, inclusive. Format: `YYYY-MM-DD` (e.g. `2024-01-01`).                                              | 2024-01-01                                                                                                                  |
| `to`                                                                                                                        | [Date](../../types/rfcdate.md)                                                                                              | :heavy_check_mark:                                                                                                          | End of the date window, inclusive. Format: `YYYY-MM-DD` (e.g. `2024-12-31`).                                                | 2024-12-31                                                                                                                  |