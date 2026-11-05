# PredMdElectionMap

Every race of one election cycle in all 50 states, with each candidate's price, plus the chamber-control markets.

## Example Usage

```typescript
import { PredMdElectionMap } from "@ariesdotcom/finance-dev/models";

let value: PredMdElectionMap = {
  asOf: new Date("2026-10-22T17:32:50.815Z"),
  cycle: 2026,
  electionDate: new Date("2026-11-03"),
  national: {
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
  },
  states: [],
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `asOf`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | When this map was built. Prices are as fresh as the venue's pair-trade files it reads.        | 2026-10-22T17:32:50.815Z                                                                      |
| `cycle`                                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026                                                                                          |
| `electionDate`                                                                                | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | The cycle's November general election.                                                        | 2026-11-03                                                                                    |
| `national`                                                                                    | [models.PredMdElectionNational](../models/pred-md-election-national.md)                       | :heavy_check_mark:                                                                            | The chamber-control markets. A market the venue does not list for the cycle is `null`.        |                                                                                               |
| `states`                                                                                      | [models.PredMdElectionState](../models/pred-md-election-state.md)[]                           | :heavy_check_mark:                                                                            | All 50 states, sorted by name, each present even with no race. DC is not included.            |                                                                                               |