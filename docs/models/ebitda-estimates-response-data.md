# EbitdaEstimatesResponseData

## Example Usage

```typescript
import { EbitdaEstimatesResponseData } from "@ariesdotcom/finance-dev/models";

let value: EbitdaEstimatesResponseData = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ebitdaAvg`                                              | *number*                                                 | :heavy_minus_sign:                                       | Average analyst EBITDA estimate for the period           |
| `ebitdaHigh`                                             | *number*                                                 | :heavy_minus_sign:                                       | Highest analyst EBITDA estimate for the period           |
| `ebitdaLow`                                              | *number*                                                 | :heavy_minus_sign:                                       | Lowest analyst EBITDA estimate for the period            |
| `numberAnalysts`                                         | *number*                                                 | :heavy_minus_sign:                                       | Number of analysts contributing to the estimate          |
| `period`                                                 | *string*                                                 | :heavy_minus_sign:                                       | End date of the reporting period the estimate applies to |
| `quarter`                                                | *number*                                                 | :heavy_minus_sign:                                       | Fiscal quarter of the period; 0 for annual estimates     |
| `year`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Fiscal year of the period                                |