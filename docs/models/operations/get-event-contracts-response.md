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
        eventId: "<id>",
        lastSyncedAt: new Date("2026-04-29T00:02:23.516Z"),
        nonTradable: true,
        state: "Pennsylvania",
        symbol: "<value>",
        symbolSubTypes: [
          "<value 1>",
        ],
        tickSize: new Decimal("0.01"),
        tradable: false,
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