# OptionSnapshotContractDetails

Static contract metadata (`OptionSnapshotDetailsDTO`).

## Example Usage

```typescript
import { OptionSnapshotContractDetails } from "@ariesdotcom/finance-dev/models";

let value: OptionSnapshotContractDetails = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `contractType`                                                    | *string*                                                          | :heavy_minus_sign:                                                | Contract type (for example call or put).                          |
| `exerciseStyle`                                                   | *string*                                                          | :heavy_minus_sign:                                                | Exercise style of the contract (for example american or european) |
| `expirationDate`                                                  | *string*                                                          | :heavy_minus_sign:                                                | Expiration date (ISO date string).                                |
| `sharesPerContract`                                               | *number*                                                          | :heavy_minus_sign:                                                | Number of shares of the underlying covered by one contract        |
| `strikePrice`                                                     | *number*                                                          | :heavy_minus_sign:                                                | Strike price of the contract                                      |
| `ticker`                                                          | *string*                                                          | :heavy_minus_sign:                                                | OCC-format options ticker.                                        |