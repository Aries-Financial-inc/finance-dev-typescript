# PredMdElectionNational

The chamber-control markets. A market the venue does not list for the cycle is `null`.

## Example Usage

```typescript
import { PredMdElectionNational } from "@ariesdotcom/finance-dev/models";

let value: PredMdElectionNational = {
  balanceOfPower: {
    eventId: "HORC_1126",
    outcomes: [],
  },
  houseControl: {
    eventId: "HORC_1126",
    outcomes: [],
  },
  senateControl: {
    eventId: "HORC_1126",
    outcomes: [],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `balanceOfPower`                                                                        | [models.BalanceOfPower](../models/balance-of-power.md)                                  | :heavy_check_mark:                                                                      | Which party controls each chamber: one outcome per Senate × House split (`FEDRO_1126`). |
| `houseControl`                                                                          | [models.HouseControl](../models/house-control.md)                                       | :heavy_check_mark:                                                                      | Which party controls the House (`HORC_1126`).                                           |
| `senateControl`                                                                         | [models.SenateControl](../models/senate-control.md)                                     | :heavy_check_mark:                                                                      | Which party holds the Senate majority (`SENM_1126`).                                    |