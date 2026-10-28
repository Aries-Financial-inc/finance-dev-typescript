# IndexGroupsResponse

Response containing the available index groups.

## Example Usage

```typescript
import { IndexGroupsResponse } from "@ariesdotcom/finance-dev/models";

let value: IndexGroupsResponse = {
  indexGroups: [
    {
      description: "CBOE Data Services CMSI - Crypto Fee",
      name: "IND_CBOC",
    },
  ],
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `indexGroups`                                   | [models.IndexGroup](../models/index-group.md)[] | :heavy_minus_sign:                              | Array of available index groups                 |