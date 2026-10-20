# IndexChartBarsResponse

Response containing chart bars for an index along with the index metadata.

## Example Usage

```typescript
import { IndexChartBarsResponse } from "finance-dev/models";

let value: IndexChartBarsResponse = {};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `chartBars`                                      | [models.ChartBar](../models/chart-bar.md)[]      | :heavy_minus_sign:                               | Array of historical chart bars                   |
| `currency`                                       | *string*                                         | :heavy_minus_sign:                               | Currency in which the index is quoted            |
| `indexGroup`                                     | *string*                                         | :heavy_minus_sign:                               | Index group classification                       |
| `indexName`                                      | *string*                                         | :heavy_minus_sign:                               | Full name of the index                           |
| `symbol`                                         | *string*                                         | :heavy_minus_sign:                               | Index ticker symbol                              |
| `timing`                                         | *string*                                         | :heavy_minus_sign:                               | Data timing type (RealTime or Delayed)           |
| `valoren`                                        | *string*                                         | :heavy_minus_sign:                               | Swiss securities identification number (Valoren) |