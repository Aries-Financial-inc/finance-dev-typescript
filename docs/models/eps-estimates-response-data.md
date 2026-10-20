# EpsEstimatesResponseData

## Example Usage

```typescript
import { EpsEstimatesResponseData } from "finance-dev/models";

let value: EpsEstimatesResponseData = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `epsAvg`                                                 | *number*                                                 | :heavy_minus_sign:                                       | Average analyst EPS estimate for the period              |
| `epsHigh`                                                | *number*                                                 | :heavy_minus_sign:                                       | Highest analyst EPS estimate for the period              |
| `epsLow`                                                 | *number*                                                 | :heavy_minus_sign:                                       | Lowest analyst EPS estimate for the period               |
| `numberAnalysts`                                         | *number*                                                 | :heavy_minus_sign:                                       | Number of analysts contributing to the estimate          |
| `period`                                                 | *string*                                                 | :heavy_minus_sign:                                       | End date of the reporting period the estimate applies to |
| `quarter`                                                | *number*                                                 | :heavy_minus_sign:                                       | Fiscal quarter of the period; 0 for annual estimates     |
| `year`                                                   | *number*                                                 | :heavy_minus_sign:                                       | Fiscal year of the period                                |