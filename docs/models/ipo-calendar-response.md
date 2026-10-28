# IpoCalendarResponse

Response containing IPO calendar entries.

## Example Usage

```typescript
import { IpoCalendarResponse } from "@ariesdotcom/finance-dev/models";

let value: IpoCalendarResponse = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `ipos`                                    | [models.IpoItem](../models/ipo-item.md)[] | :heavy_minus_sign:                        | Array of IPO calendar entries             |