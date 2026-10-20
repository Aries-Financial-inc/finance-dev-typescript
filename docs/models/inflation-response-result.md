# InflationResponseResult

## Example Usage

```typescript
import { InflationResponseResult } from "finance-dev/models";

let value: InflationResponseResult = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `cpi`                                | *number*                             | :heavy_minus_sign:                   | Consumer Price Index                 |
| `cpiCore`                            | *number*                             | :heavy_minus_sign:                   | Core CPI (excluding food and energy) |
| `cpiYearOverYear`                    | *number*                             | :heavy_minus_sign:                   | CPI year-over-year change            |
| `date`                               | *string*                             | :heavy_minus_sign:                   | Reference date (YYYY-MM-DD)          |
| `pce`                                | *number*                             | :heavy_minus_sign:                   | Personal Consumption Expenditures    |
| `pceCore`                            | *number*                             | :heavy_minus_sign:                   | Core PCE                             |
| `pceSpending`                        | *number*                             | :heavy_minus_sign:                   | PCE spending                         |