# PredMdBaseEventHit

One base event with at least one matching contract. The index carries no display name; read it through /base-events/{baseEventId}.

## Example Usage

```typescript
import { PredMdBaseEventHit } from "@ariesdotcom/finance-dev/models";

let value: PredMdBaseEventHit = {
  baseEventId: "<id>",
  contractsFound: 94756,
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `baseEventId`                                                                                     | *string*                                                                                          | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `contractsFound`                                                                                  | *number*                                                                                          | :heavy_check_mark:                                                                                | Every matching contract under this hit. Read them with type=contracts and eventId or baseEventId. |
| `underlyingSpec`                                                                                  | *string*                                                                                          | :heavy_minus_sign:                                                                                | N/A                                                                                               |