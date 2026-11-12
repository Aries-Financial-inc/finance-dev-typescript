# HouseControl

Which party controls the House (`HORC_1126`).

## Example Usage

```typescript
import { HouseControl } from "@ariesdotcom/finance-dev/models";

let value: HouseControl = {
  eventId: "HORC_1126",
  outcomes: [],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | HORC_1126                                                                            |
| `outcomes`                                                                           | [models.PredMdElectionMarketOutcome](../models/pred-md-election-market-outcome.md)[] | :heavy_check_mark:                                                                   | Sorted by `yesPrice`, highest first; untraded outcomes last.                         |                                                                                      |