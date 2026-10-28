# PredMdEventSearchResult

One page of events. found, page and perPage count events.

## Example Usage

```typescript
import { PredMdEventSearchResult } from "@ariesdotcom/finance-dev/models";

let value: PredMdEventSearchResult = {
  found: 835913,
  hits: [],
  page: 889780,
  perPage: 725777,
  type: "events",
};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `found`                                                   | *number*                                                  | :heavy_check_mark:                                        | Every match, not just this page.                          |
| `hits`                                                    | [models.PredMdEventHit](../models/pred-md-event-hit.md)[] | :heavy_check_mark:                                        | N/A                                                       |
| `page`                                                    | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `perPage`                                                 | *number*                                                  | :heavy_check_mark:                                        | N/A                                                       |
| `type`                                                    | *"events"*                                                | :heavy_check_mark:                                        | N/A                                                       |