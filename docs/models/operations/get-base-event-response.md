# GetBaseEventResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { GetBaseEventResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: GetBaseEventResponse = {
  data: {
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
  },
  success: true,
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [models.PredMdBaseEventWithEvents](../../models/pred-md-base-event-with-events.md) | :heavy_minus_sign:                                                                 | N/A                                                                                |                                                                                    |
| `success`                                                                          | *boolean*                                                                          | :heavy_check_mark:                                                                 | N/A                                                                                | true                                                                               |