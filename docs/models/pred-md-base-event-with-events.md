# PredMdBaseEventWithEvents

## Example Usage

```typescript
import { PredMdBaseEventWithEvents } from "finance-dev/models";

let value: PredMdBaseEventWithEvents = {
  baseEvent: {
    baseEventId: "<id>",
    categoryLevels: [
      "Economic Indicators",
      "Labor",
      "United States",
    ],
    displayName: "US Unemployment Rate",
    firstSeenAt: new Date("2026-08-01T20:56:07.430Z"),
    lastSyncedAt: new Date("2024-05-08T09:41:38.627Z"),
  },
  events: [],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `baseEvent`                                                                    | [models.PredMdBaseEvent](../models/pred-md-base-event.md)                      | :heavy_check_mark:                                                             | Top-level 4castex base event (e.g. UNR, HORC).                                 |
| `events`                                                                       | [models.PredMdEventWithContracts](../models/pred-md-event-with-contracts.md)[] | :heavy_check_mark:                                                             | N/A                                                                            |