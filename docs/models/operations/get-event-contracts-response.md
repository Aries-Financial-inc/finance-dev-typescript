# GetEventContractsResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { GetEventContractsResponse } from "@ariesdotcom/finance-dev/models/operations";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: GetEventContractsResponse = {
  data: {
    contracts: [
      {
        baseEventId: "<id>",
        candidateStatus: "C",
        eventId: "<id>",
        frontRunner: true,
        incumbent: true,
        lastSyncedAt: new Date("2025-10-07T21:12:53.667Z"),
        nonTradable: false,
        party: "R",
        photo: {
          credit: "Gage Skidmore",
          license: "CC BY-SA 4.0",
          licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
          sourceUrl: "https://commons.wikimedia.org/wiki/File:K_Paxton.jpg",
          url: "https://vain-bonnet.org/",
        },
        state: "Vermont",
        symbol: "<value>",
        symbolSubTypes: [],
        tickSize: new Decimal("0.01"),
        tradable: true,
      },
    ],
    event: {
      baseEventId: "<id>",
      eventId: "<id>",
      lastSyncedAt: new Date("2024-01-24T19:07:49.046Z"),
      timeSpecifier: "2026.06",
    },
  },
  success: true,
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `data`                                                                          | [models.PredMdEventWithContracts](../../models/pred-md-event-with-contracts.md) | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |
| `success`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | N/A                                                                             | true                                                                            |