# EbitEstimatesResponseData

## Example Usage

```typescript
import { EbitEstimatesResponseData } from "@ariesdotcom/finance-dev/models";

let value: EbitEstimatesResponseData = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `ebitAvg`                                                | *number*                                                 | :heavy_minus_sign:                                       | Average analyst EBIT estimate for the period             |
| `ebitHigh`                                               | *number*                                                 | :heavy_minus_sign:                                       | Highest analyst EBIT estimate for the period             |
| `ebitLow`                                                | *number*                                                 | :heavy_minus_sign:                                       | Lowest analyst EBIT estimate for the period              |
| `numberAnalysts`                                         | *number*                                                 | :heavy_minus_sign:                                       | Number of analysts contributing to the estimate          |
| `period`                                                 | *string*                                                 | :heavy_minus_sign:                                       | End date of the reporting period the estimate applies to |
| `quarter`                                                | *number*                                                 | :heavy_minus_sign:                                       | Fiscal quarter of the period; 0 for annual estimates     |
| `year`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Fiscal year of the period                                |