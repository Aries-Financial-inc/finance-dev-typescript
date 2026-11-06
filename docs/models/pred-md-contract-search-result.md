# PredMdContractSearchResult

One page of contracts.

## Example Usage

```typescript
import { PredMdContractSearchResult } from "@ariesdotcom/finance-dev/models";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: PredMdContractSearchResult = {
  found: 160518,
  hits: [
    {
      baseEventId: "<id>",
      candidateStatus: "C",
      eventId: "<id>",
      frontRunner: true,
      incumbent: true,
      openInterest: 1309471,
      party: "I",
      photo: {
        credit: "Gage Skidmore",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:K_Paxton.jpg",
        url: "https://spherical-opera.name/",
      },
      state: "ACTIVE",
      symbol: "UNR_0822_3.5",
      symbolSubTypes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tickSize: new Decimal("0.01"),
      timeSpecifier: "2022.08",
      tradable: true,
    },
  ],
  page: 847610,
  perPage: 787626,
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