# PredMdHistoryRequest

Single query within a batch historical-data request.

## Example Usage

```typescript
import { PredMdHistoryRequest } from "finance-dev/models";

let value: PredMdHistoryRequest = {
  from: new Date("2026-04-01T00:00:00Z"),
  limit: 500,
  symbol: "HORC_1126_Republican",
  to: new Date("2026-04-20T00:00:00Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `from`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Inclusive lower bound. Zero/omitted means unbounded.                                          | 2026-04-01T00:00:00Z                                                                          |
| `limit`                                                                                       | *number*                                                                                      | :heavy_minus_sign:                                                                            | 0 or omitted means 10000; values above 10000 are clamped to it.                               | 500                                                                                           |
| `symbol`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | HORC_1126_Republican                                                                          |
| `to`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Inclusive upper bound. Zero/omitted means unbounded.                                          | 2026-04-20T00:00:00Z                                                                          |