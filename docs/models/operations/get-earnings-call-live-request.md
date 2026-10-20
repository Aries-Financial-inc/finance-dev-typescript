# GetEarningsCallLiveRequest

## Example Usage

```typescript
import { GetEarningsCallLiveRequest } from "finance-dev/models/operations";

let value: GetEarningsCallLiveRequest = {
  symbol: "AAPL",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `from`                                                               | [Date](../../types/rfcdate.md)                                       | :heavy_minus_sign:                                                   | Start of the date window, inclusive. Format: `YYYY-MM-DD`.           |                                                                      |
| `to`                                                                 | [Date](../../types/rfcdate.md)                                       | :heavy_minus_sign:                                                   | End of the date window, inclusive. Format: `YYYY-MM-DD`.             |                                                                      |
| `symbol`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | Stock ticker to query. Send the plain uppercase symbol, e.g. `AAPL`. | AAPL                                                                 |