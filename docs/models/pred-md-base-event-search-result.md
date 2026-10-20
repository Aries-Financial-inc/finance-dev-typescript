# PredMdBaseEventSearchResult

One page of base events. found, page and perPage count base events.

## Example Usage

```typescript
import { PredMdBaseEventSearchResult } from "finance-dev/models";

let value: PredMdBaseEventSearchResult = {
  found: 681760,
  hits: [],
  page: 882274,
  perPage: 112466,
  type: "base-events",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `found`                                                            | *number*                                                           | :heavy_check_mark:                                                 | Every match, not just this page.                                   |
| `hits`                                                             | [models.PredMdBaseEventHit](../models/pred-md-base-event-hit.md)[] | :heavy_check_mark:                                                 | N/A                                                                |
| `page`                                                             | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `perPage`                                                          | *number*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `type`                                                             | *"base-events"*                                                    | :heavy_check_mark:                                                 | N/A                                                                |