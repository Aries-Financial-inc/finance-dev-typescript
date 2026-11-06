# PredMdElectionMarketOutcome

One outcome of a party or chamber-control market. `party` is set on party markets; `senate` and `house` on balance-of-power outcomes.

## Example Usage

```typescript
import { PredMdElectionMarketOutcome } from "@ariesdotcom/finance-dev/models";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: PredMdElectionMarketOutcome = {
  party: "D",
  symbol: "HORC_1126_Democratic",
  yesPrice: new Decimal("0.55"),
  yesPriceChange24h: new Decimal("0.01"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `house`                                                                                            | [models.House](../models/house.md)                                                                 | :heavy_minus_sign:                                                                                 | House majority this balance-of-power outcome names.                                                |                                                                                                    |
| `party`                                                                                            | [models.PredMdElectionMarketOutcomeParty](../models/pred-md-election-market-outcome-party.md)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                | D                                                                                                  |
| `senate`                                                                                           | [models.Senate](../models/senate.md)                                                               | :heavy_minus_sign:                                                                                 | Senate majority this balance-of-power outcome names.                                               |                                                                                                    |
| `symbol`                                                                                           | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                | HORC_1126_Democratic                                                                               |
| `yesPrice`                                                                                         | *Decimal*                                                                                          | :heavy_check_mark:                                                                                 | Last YES trade, or the settlement once settled; `null` if never traded. Exact decimal string.      | 0.55                                                                                               |
| `yesPriceChange24h`                                                                                | *Decimal*                                                                                          | :heavy_check_mark:                                                                                 | `yesPrice` less the YES price 24 hours earlier; `null` if either is missing. Exact decimal string. | 0.01                                                                                               |