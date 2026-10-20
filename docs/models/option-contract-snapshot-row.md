# OptionContractSnapshotRow

One option contract row in a snapshot response (`OptionContractSnapshotDataDTO`). Optional fields are omitted when absent.

## Example Usage

```typescript
import { OptionContractSnapshotRow } from "finance-dev/models";

let value: OptionContractSnapshotRow = {};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `breakEvenPrice`                                                                        | *number*                                                                                | :heavy_minus_sign:                                                                      | Underlying price at which the contract breaks even                                      |
| `day`                                                                                   | [models.OptionSnapshotDayBar](../models/option-snapshot-day-bar.md)                     | :heavy_minus_sign:                                                                      | Most recent daily OHLCV bar for the contract (`OptionSnapshotDayBarDTO`).               |
| `details`                                                                               | [models.OptionSnapshotContractDetails](../models/option-snapshot-contract-details.md)   | :heavy_minus_sign:                                                                      | Static contract metadata (`OptionSnapshotDetailsDTO`).                                  |
| `fmv`                                                                                   | *number*                                                                                | :heavy_minus_sign:                                                                      | Fair market value of the contract, when provided                                        |
| `fmvLastUpdated`                                                                        | *number*                                                                                | :heavy_minus_sign:                                                                      | Timestamp of the last fair market value update, as supplied by the market data provider |
| `greeks`                                                                                | [models.OptionSnapshotGreeks](../models/option-snapshot-greeks.md)                      | :heavy_minus_sign:                                                                      | Greeks when available (`OptionSnapshotGreeksDTO`).                                      |
| `impliedVolatility`                                                                     | *number*                                                                                | :heavy_minus_sign:                                                                      | Implied volatility of the contract                                                      |
| `lastQuote`                                                                             | [models.OptionSnapshotLastQuote](../models/option-snapshot-last-quote.md)               | :heavy_minus_sign:                                                                      | Latest NBBO quote when included (`OptionSnapshotLastQuoteDTO`).                         |
| `lastTrade`                                                                             | [models.OptionSnapshotLastTrade](../models/option-snapshot-last-trade.md)               | :heavy_minus_sign:                                                                      | Latest trade when included (`OptionSnapshotLastTradeDTO`).                              |
| `openInterest`                                                                          | *number*                                                                                | :heavy_minus_sign:                                                                      | Open interest for the contract                                                          |
| `underlyingAsset`                                                                       | [models.OptionSnapshotUnderlying](../models/option-snapshot-underlying.md)              | :heavy_minus_sign:                                                                      | Underlying equity snapshot (`OptionSnapshotUnderlyingDTO`).                             |