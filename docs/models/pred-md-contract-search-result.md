# PredMdContractSearchResult

One page of contracts.

## Example Usage

```typescript
import { PredMdContractSearchResult } from "finance-dev/models";
import { Decimal } from "finance-dev/types";

let value: PredMdContractSearchResult = {
  found: 160518,
  hits: [
    {
      baseEventId: "<id>",
      eventId: "<id>",
      state: "ACTIVE",
      symbol: "UNR_0822_3.5",
      symbolSubTypes: [],
      tickSize: new Decimal("0.01"),
      timeSpecifier: "2022.08",
      tradable: true,
    },
  ],
  page: 418043,
  perPage: 345343,
  type: "contracts",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `found`                                                         | *number*                                                        | :heavy_check_mark:                                              | Every match, not just this page.                                |
| `hits`                                                          | [models.PredMdContractHit](../models/pred-md-contract-hit.md)[] | :heavy_check_mark:                                              | N/A                                                             |
| `page`                                                          | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `perPage`                                                       | *number*                                                        | :heavy_check_mark:                                              | N/A                                                             |
| `type`                                                          | *"contracts"*                                                   | :heavy_check_mark:                                              | N/A                                                             |