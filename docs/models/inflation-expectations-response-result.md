# InflationExpectationsResponseResult

## Example Usage

```typescript
import { InflationExpectationsResponseResult } from "@ariesdotcom/finance-dev/models";

let value: InflationExpectationsResponseResult = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `date`                                               | *string*                                             | :heavy_minus_sign:                                   | Reference date (YYYY-MM-DD)                          |
| `forwardYears5To10`                                  | *number*                                             | :heavy_minus_sign:                                   | Forward inflation expectation covering years 5 to 10 |
| `market10Year`                                       | *number*                                             | :heavy_minus_sign:                                   | Market-implied 10-year inflation expectation         |
| `market5Year`                                        | *number*                                             | :heavy_minus_sign:                                   | Market-implied 5-year inflation expectation          |
| `model10Year`                                        | *number*                                             | :heavy_minus_sign:                                   | Model-based 10-year inflation expectation            |
| `model1Year`                                         | *number*                                             | :heavy_minus_sign:                                   | Model-based 1-year inflation expectation             |
| `model30Year`                                        | *number*                                             | :heavy_minus_sign:                                   | Model-based 30-year inflation expectation            |
| `model5Year`                                         | *number*                                             | :heavy_minus_sign:                                   | Model-based 5-year inflation expectation             |