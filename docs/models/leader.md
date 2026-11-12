# Leader

The highest-priced outcome shown, to colour the race by. `null` while no outcome has traded.

## Example Usage

```typescript
import { Leader } from "@ariesdotcom/finance-dev/models";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: Leader = {
  party: "I",
  symbol: "AXXTX_110326_JT",
  yesPrice: new Decimal("0.66"),
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `party`                                                                    | [models.PredMdElectionRaceParty](../models/pred-md-election-race-party.md) | :heavy_check_mark:                                                         | The leader's party. `null` when the venue has none for the candidate.      |                                                                            |
| `symbol`                                                                   | *string*                                                                   | :heavy_check_mark:                                                         | N/A                                                                        | AXXTX_110326_JT                                                            |
| `yesPrice`                                                                 | *Decimal*                                                                  | :heavy_check_mark:                                                         | The leader's `yesPrice`. Exact decimal string.                             | 0.66                                                                       |