# GetStockSnapshotsRequest

## Example Usage

```typescript
import { GetStockSnapshotsRequest } from "finance-dev/models/operations";

let value: GetStockSnapshotsRequest = {
  tickers: "AAPL,TSLA,GOOG",
  includeOtc: false,
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `tickers`                                                                                                  | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | Comma-separated list of tickers, such as AAPL,MSFT. Use this to request several companies in one call.     | AAPL,TSLA,GOOG                                                                                             |
| `includeOtc`                                                                                               | *boolean*                                                                                                  | :heavy_minus_sign:                                                                                         | Whether to include over-the-counter securities. Use true only when your product needs OTC market coverage. | false                                                                                                      |