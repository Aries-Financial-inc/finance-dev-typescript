# PredMdElectionState

## Example Usage

```typescript
import { PredMdElectionState } from "@ariesdotcom/finance-dev/models";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: PredMdElectionState = {
  code: "TX",
  governor: [
    {
      atLarge: false,
      baseEventId: "AXXTX",
      district: 7,
      electionDate: new Date("2026-11-03"),
      eventId: "AXXTX_110326",
      heldBy: "D",
      lastTradeDate: new Date("2026-12-06"),
      leader: {
        party: "I",
        symbol: "AXXTX_110326_JT",
        yesPrice: new Decimal("0.66"),
      },
      outcomes: [
        {
          frontRunner: false,
          incumbent: null,
          name: "James Talarico",
          party: "R",
          photo: {
            credit: "Gage Skidmore",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:K_Paxton.jpg",
            url: "https://mushy-platter.info/",
          },
          symbol: "AXXTX_110326_JT",
          tradable: true,
          yesPrice: new Decimal("0.66"),
          yesPriceChange24h: new Decimal("0.08"),
        },
      ],
      partyMarket: {
        eventId: "HORC_1126",
        outcomes: [],
      },
      raceType: "general",
      resolvedAt: new Date("2024-09-05T02:09:16.311Z"),
      status: "open",
      title: "Texas Senate",
      winningSymbol: "<value>",
    },
  ],
  house: [
    {
      atLarge: false,
      baseEventId: "AXXTX",
      district: 7,
      electionDate: new Date("2026-11-03"),
      eventId: "AXXTX_110326",
      heldBy: "I",
      lastTradeDate: new Date("2026-12-06"),
      leader: {
        party: "I",
        symbol: "AXXTX_110326_JT",
        yesPrice: new Decimal("0.66"),
      },
      outcomes: [
        {
          frontRunner: false,
          incumbent: null,
          name: "James Talarico",
          party: "R",
          photo: {
            credit: "Gage Skidmore",
            license: "CC BY-SA 4.0",
            licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
            sourceUrl: "https://commons.wikimedia.org/wiki/File:K_Paxton.jpg",
            url: "https://mushy-platter.info/",
          },
          symbol: "AXXTX_110326_JT",
          tradable: true,
          yesPrice: new Decimal("0.66"),
          yesPriceChange24h: new Decimal("0.08"),
        },
      ],
      partyMarket: {
        eventId: "HORC_1126",
        outcomes: [],
      },
      raceType: "general",
      resolvedAt: new Date("2026-06-24T14:37:18.961Z"),
      status: "open",
      title: "Texas Senate",
      winningSymbol: "<value>",
    },
  ],
  houseSeats: 38,
  name: "Texas",
  senate: [],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `code`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               | TX                                                                |
| `governor`                                                        | [models.PredMdElectionRace](../models/pred-md-election-race.md)[] | :heavy_check_mark:                                                | N/A                                                               |                                                                   |
| `house`                                                           | [models.PredMdElectionRace](../models/pred-md-election-race.md)[] | :heavy_check_mark:                                                | Sorted by district.                                               |                                                                   |
| `houseSeats`                                                      | *number*                                                          | :heavy_check_mark:                                                | House seats under the 2020 apportionment.                         | 38                                                                |
| `name`                                                            | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               | Texas                                                             |
| `senate`                                                          | [models.PredMdElectionRace](../models/pred-md-election-race.md)[] | :heavy_check_mark:                                                | A state can hold two: a regular race and a special.               |                                                                   |