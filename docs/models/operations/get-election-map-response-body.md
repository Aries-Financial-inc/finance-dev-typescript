# GetElectionMapResponseBody

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { GetElectionMapResponseBody } from "@ariesdotcom/finance-dev/models/operations";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: GetElectionMapResponseBody = {
  data: {
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
    states: [
      {
        code: "TX",
        governor: [],
        house: [],
        houseSeats: 38,
        name: "Texas",
        senate: [
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
                  sourceUrl:
                    "https://commons.wikimedia.org/wiki/File:K_Paxton.jpg",
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
            resolvedAt: new Date("2025-02-28T17:37:47.606Z"),
            status: "open",
            title: "Texas Senate",
            winningSymbol: "<value>",
          },
        ],
      },
    ],
  },
  success: true,
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       | Example                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                            | [models.PredMdElectionMap](../../models/pred-md-election-map.md)                                                  | :heavy_minus_sign:                                                                                                | Every race of one election cycle in all 50 states, with each candidate's price, plus the chamber-control markets. |                                                                                                                   |
| `success`                                                                                                         | *boolean*                                                                                                         | :heavy_check_mark:                                                                                                | N/A                                                                                                               | true                                                                                                              |