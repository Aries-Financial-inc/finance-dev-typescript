# PredMdEventWithContracts

## Example Usage

```typescript
import { PredMdEventWithContracts } from "finance-dev/models";

let value: PredMdEventWithContracts = {
  contracts: [],
  event: {
    baseEventId: "<id>",
    eventId: "<id>",
    lastSyncedAt: new Date("2024-01-24T19:07:49.046Z"),
    timeSpecifier: "2026.06",
  },
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `contracts`                                               | [models.PredMdContract](../models/pred-md-contract.md)[]  | :heavy_check_mark:                                        | N/A                                                       |
| `event`                                                   | [models.PredMdEvent](../models/pred-md-event.md)          | :heavy_check_mark:                                        | One real-world event under a base event (e.g. HORC_1126). |