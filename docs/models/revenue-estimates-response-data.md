# RevenueEstimatesResponseData

## Example Usage

```typescript
import { RevenueEstimatesResponseData } from "@ariesdotcom/finance-dev/models";

let value: RevenueEstimatesResponseData = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `numberAnalysts`                                         | *number*                                                 | :heavy_minus_sign:                                       | Number of analysts contributing to the estimate          |
| `period`                                                 | *string*                                                 | :heavy_minus_sign:                                       | End date of the reporting period the estimate applies to |
| `quarter`                                                | *number*                                                 | :heavy_minus_sign:                                       | Fiscal quarter of the period; 0 for annual estimates     |
| `revenueAvg`                                             | *number*                                                 | :heavy_minus_sign:                                       | Average analyst revenue estimate for the period          |
| `revenueHigh`                                            | *number*                                                 | :heavy_minus_sign:                                       | Highest analyst revenue estimate for the period          |
| `revenueLow`                                             | *number*                                                 | :heavy_minus_sign:                                       | Lowest analyst revenue estimate for the period           |
| `year`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Fiscal year of the period                                |