# PredMdEventHit

One event with at least one matching contract.

## Example Usage

```typescript
import { PredMdEventHit } from "finance-dev/models";

let value: PredMdEventHit = {
  baseEventId: "<id>",
  contractsFound: 585150,
  eventId: "<id>",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `baseEventId`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `contractsFound`                                                                                  | *number*                                                                                          | :heavy_check_mark:                                                                                | Every matching contract under this hit. Read them with type=contracts and eventId or baseEventId. |
| `eventDisplayName`                                                                                | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `eventId`                                                                                         | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `eventQuestion`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `timeSpecifier`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |
| `underlyingSpec`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |