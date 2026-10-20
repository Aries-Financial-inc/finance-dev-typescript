# OptionsScreenerItem

Option contract details returned by options top-volume and top-gainers endpoints.

## Example Usage

```typescript
import { OptionsScreenerItem } from "finance-dev/models";

let value: OptionsScreenerItem = {
  ask: 3.5,
  bid: 3.4,
  change: 0.22,
  changePercent: 6.81,
  expiry: "2024-01-19",
  impliedVolatility: 0.28,
  lastPrice: 3.45,
  logoUrl: "https://cdn.example.com/logos/AAPL.png",
  openInterest: 45000,
  strike: 190,
  symbol: "AAPL240119C00190000",
  type: "c",
  underlyingSymbol: "AAPL",
  volume: 12500,
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `ask`                                                                                                         | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Lowest current seller price for the option. Use it as the reference price when buying.                        |
| `bid`                                                                                                         | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Highest current buyer price for the option. Use it as the reference price when selling.                       |
| `change`                                                                                                      | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Price change from previous close                                                                              |
| `changePercent`                                                                                               | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Percentage change from previous close                                                                         |
| `expiry`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Option expiration date. Use it to group contracts by expiry and show time remaining.                          |
| `impliedVolatility`                                                                                           | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Market-implied volatility for the option. Use it to compare how expensive option premium is across contracts. |
| `lastPrice`                                                                                                   | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Most recent traded option price. Use bid and ask when estimating immediate execution cost.                    |
| `logoUrl`                                                                                                     | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | URL to the underlying company or ETF logo                                                                     |
| `openInterest`                                                                                                | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Number of outstanding contracts. Use it to estimate option liquidity beyond today's trading volume.           |
| `strike`                                                                                                      | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Option strike price. Use it to explain the price level where the option can be exercised.                     |
| `symbol`                                                                                                      | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Option contract symbol. Use this exact value when requesting option quotes, snapshots, or trades.             |
| `type`                                                                                                        | [models.OptionsScreenerItemType](../models/options-screener-item-type.md)                                     | :heavy_minus_sign:                                                                                            | Option type returned by the API. `c` = Call; `P` = Put.                                                       |
| `underlyingSymbol`                                                                                            | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | Underlying stock or ETF symbol                                                                                |
| `volume`                                                                                                      | *number*                                                                                                      | :heavy_minus_sign:                                                                                            | Contracts traded during the current session. Use it to identify active option contracts.                      |