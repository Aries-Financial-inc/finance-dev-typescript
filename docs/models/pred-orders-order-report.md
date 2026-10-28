# PredOrdersOrderReport

One venue execution report against the order. Quantities and prices are omitted when the venue did not send them for that report type.

## Example Usage

```typescript
import { PredOrdersOrderReport } from "@ariesdotcom/finance-dev/models";

let value: PredOrdersOrderReport = {
  avgPx: "0.54",
  cumQty: "10",
  execId: "<id>",
  execType: "trade",
  lastPx: "0.54",
  lastQty: "10",
  leavesQty: "0",
  status: "filled",
  transactTime: new Date("2025-07-23T21:08:45.150Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `avgPx`                                                                                       | *string*                                                                                      | :heavy_minus_sign:                                                                            | Exact decimal as a string.                                                                    | 0.54                                                                                          |
| `bustedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Set when the venue later cancelled this trade.                                                |                                                                                               |
| `cumQty`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Exact decimal as a string.                                                                    | 10                                                                                            |
| `execId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `execType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | trade                                                                                         |
| `lastPx`                                                                                      | *string*                                                                                      | :heavy_minus_sign:                                                                            | Exact decimal as a string.                                                                    | 0.54                                                                                          |
| `lastQty`                                                                                     | *string*                                                                                      | :heavy_minus_sign:                                                                            | Exact decimal as a string.                                                                    | 10                                                                                            |
| `leavesQty`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | Exact decimal as a string.                                                                    | 0                                                                                             |
| `status`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | filled                                                                                        |
| `text`                                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |                                                                                               |
| `transactTime`                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |