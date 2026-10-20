# GetHistoryRequest

## Example Usage

```typescript
import { GetHistoryRequest } from "finance-dev/models/operations";

let value: GetHistoryRequest = {
  symbol: "HORC_1126_Republican",
  from: "2026-04-01T00:00:00Z",
  to: "2026-04-20T00:00:00Z",
  limit: 500,
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `symbol`                                                        | *string*                                                        | :heavy_check_mark:                                              | N/A                                                             | HORC_1126_Republican                                            |
| `from`                                                          | *string*                                                        | :heavy_minus_sign:                                              | RFC3339 timestamp or Unix seconds/milliseconds.                 | 2026-04-01T00:00:00Z                                            |
| `to`                                                            | *string*                                                        | :heavy_minus_sign:                                              | RFC3339 timestamp or Unix seconds/milliseconds.                 | 2026-04-20T00:00:00Z                                            |
| `limit`                                                         | *number*                                                        | :heavy_minus_sign:                                              | 0 or omitted means 10000; values above 10000 are clamped to it. | 500                                                             |