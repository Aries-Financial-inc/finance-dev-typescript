# PredMdEventHit

One event with at least one matching contract. With sortBy=openInterest, ranked by its total open interest.

## Example Usage

```typescript
import { PredMdEventHit } from "@ariesdotcom/finance-dev/models";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: PredMdEventHit = {
  baseEventId: "<id>",
  contracts: [
    {
      baseEventId: "<id>",
      candidateStatus: "C",
      eventId: "<id>",
      frontRunner: true,
      incumbent: false,
      openInterest: 1309471,
      party: null,
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
      ],
      tickSize: new Decimal("0.01"),
      timeSpecifier: "2022.08",
      tradable: false,
    },
  ],
  contractsFound: 436768,
  eventId: "<id>",
  openInterest: 2514201,
};
```

## Fields

| Field                                                                                                                                                                  | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            | Example                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `baseEventId`                                                                                                                                                          | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `contracts`                                                                                                                                                            | [models.PredMdContractHit](../models/pred-md-contract-hit.md)[]                                                                                                        | :heavy_check_mark:                                                                                                                                                     | This event's first matching contracts in the sortBy order, up to contractsPerHit. Empty, never null. Prices are not included; stream them from /v1/predictions/stream. |                                                                                                                                                                        |
| `contractsFound`                                                                                                                                                       | *number*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | Every matching contract under this hit. contracts holds the first contractsPerHit of them; read the rest with type=contracts and eventId or baseEventId.               |                                                                                                                                                                        |
| `eventDisplayName`                                                                                                                                                     | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `eventId`                                                                                                                                                              | *string*                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `eventQuestion`                                                                                                                                                        | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `openInterest`                                                                                                                                                         | *number*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | Sum of open interest over the event's active contracts, matching or not, as of the venue's last daily prices file. Absent when the file named none of them.            | 2514201                                                                                                                                                                |
| `timeSpecifier`                                                                                                                                                        | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |
| `underlyingSpec`                                                                                                                                                       | *string*                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                     | N/A                                                                                                                                                                    |                                                                                                                                                                        |