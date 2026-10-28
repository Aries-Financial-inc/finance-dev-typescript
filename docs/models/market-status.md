# MarketStatus

Current trading status of a market.

## Example Usage

```typescript
import { MarketStatus } from "@ariesdotcom/finance-dev/models";

let value: MarketStatus = {};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `exchange`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Exchange code (e.g., US, TO, L)                                                |
| `isOpen`                                                                       | *boolean*                                                                      | :heavy_minus_sign:                                                             | Whether the market is currently open for trading                               |
| `session`                                                                      | *string*                                                                       | :heavy_minus_sign:                                                             | Current trading session (pre-market, regular, after-hours, or empty if closed) |
| `timestamp`                                                                    | *number*                                                                       | :heavy_minus_sign:                                                             | Unix timestamp of the status data                                              |
| `timezone`                                                                     | *string*                                                                       | :heavy_minus_sign:                                                             | Timezone of the exchange (e.g., America/New_York)                              |