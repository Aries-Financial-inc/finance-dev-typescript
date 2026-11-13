# SenateControl

Which party holds the Senate majority (`SENM_1126`).

## Example Usage

```typescript
import { SenateControl } from "@ariesdotcom/finance-dev/models";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: SenateControl = {
  eventId: "HORC_1126",
  outcomes: [
    {
      party: "D",
      symbol: "HORC_1126_Democratic",
      yesPrice: new Decimal("0.55"),
      yesPriceChange24h: new Decimal("0.01"),
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `eventId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  | HORC_1126                                                                            |
| `outcomes`                                                                           | [models.PredMdElectionMarketOutcome](../models/pred-md-election-market-outcome.md)[] | :heavy_check_mark:                                                                   | Sorted by `yesPrice`, highest first; untraded outcomes last.                         |                                                                                      |