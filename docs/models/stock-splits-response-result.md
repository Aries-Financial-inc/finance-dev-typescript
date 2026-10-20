# StockSplitsResponseResult

## Example Usage

```typescript
import { StockSplitsResponseResult } from "finance-dev/models";

let value: StockSplitsResponseResult = {
  executionDate: new Date("2024-10-24"),
  splitFrom: 6613.23,
  splitTo: 8266.24,
  ticker: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `adjustmentType`                                                                              | [models.AdjustmentType](../models/adjustment-type.md)                                         | :heavy_minus_sign:                                                                            | Type of stock split adjustment                                                                |
| `executionDate`                                                                               | [Date](../types/rfcdate.md)                                                                   | :heavy_check_mark:                                                                            | Execution date of the split in YYYY-MM-DD format                                              |
| `historicalAdjustmentFactor`                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Factor used to adjust historical prices                                                       |
| `id`                                                                                          | *string*                                                                                      | :heavy_minus_sign:                                                                            | Stock split event identifier                                                                  |
| `splitFrom`                                                                                   | *number*                                                                                      | :heavy_check_mark:                                                                            | The pre-split factor in the split ratio                                                       |
| `splitTo`                                                                                     | *number*                                                                                      | :heavy_check_mark:                                                                            | The post-split factor in the split ratio                                                      |
| `ticker`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | Stock ticker symbol, such as AAPL. Use the exact ticker for the company you want to research. |