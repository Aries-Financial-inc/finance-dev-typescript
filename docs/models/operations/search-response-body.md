# SearchResponseBody

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { SearchResponseBody } from "@ariesdotcom/finance-dev/models/operations";

let value: SearchResponseBody = {
  data: {
    found: 397890,
    hits: [],
    page: 240677,
    perPage: 655933,
    type: "base-events",
  },
  success: true,
};
```

## Fields

| Field                   | Type                    | Required                | Description             | Example                 |
| ----------------------- | ----------------------- | ----------------------- | ----------------------- | ----------------------- |
| `data`                  | *operations.SearchData* | :heavy_minus_sign:      | N/A                     |                         |
| `success`               | *boolean*               | :heavy_check_mark:      | N/A                     | true                    |