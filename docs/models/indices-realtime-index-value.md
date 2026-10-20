# IndicesRealtimeIndexValue

Realtime OHLC and change fields for an index quote.

## Example Usage

```typescript
import { IndicesRealtimeIndexValue } from "finance-dev/models";

let value: IndicesRealtimeIndexValue = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `changeFromOpen`                                              | *number*                                                      | :heavy_minus_sign:                                            | Change in the index value from the session open.              |
| `changeFromPreviousClose`                                     | *number*                                                      | :heavy_minus_sign:                                            | Change in the index value from the previous close.            |
| `close`                                                       | *number*                                                      | :heavy_minus_sign:                                            | Current / last close value                                    |
| `date`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Session date in source format (locale-specific)               |
| `high`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Highest index value for the session.                          |
| `high52Weeks`                                                 | *number*                                                      | :heavy_minus_sign:                                            | 52-week high                                                  |
| `last`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Last traded value                                             |
| `low`                                                         | *number*                                                      | :heavy_minus_sign:                                            | Lowest index value for the session.                           |
| `low52Weeks`                                                  | *number*                                                      | :heavy_minus_sign:                                            | 52-week low                                                   |
| `open`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Opening value of the index for the session.                   |
| `percentChangeFromOpen`                                       | *number*                                                      | :heavy_minus_sign:                                            | Percentage change in the index value from the session open.   |
| `percentChangeFromPreviousClose`                              | *number*                                                      | :heavy_minus_sign:                                            | Percentage change in the index value from the previous close. |
| `previousClose`                                               | *number*                                                      | :heavy_minus_sign:                                            | Closing value of the index on the previous trading day.       |
| `previousCloseDate`                                           | *string*                                                      | :heavy_minus_sign:                                            | Prior close date in source format                             |
| `time`                                                        | *string*                                                      | :heavy_minus_sign:                                            | Quote time in source format                                   |
| `utcOffset`                                                   | *number*                                                      | :heavy_minus_sign:                                            | UTC offset in hours                                           |
| `volume`                                                      | *number*                                                      | :heavy_minus_sign:                                            | Volume (may be 0 for some indices)                            |