# NetInflow

Net market inflow snapshot for Nasdaq and NYSE. Use it to show whether reported flow is net buying or net selling.

## Example Usage

```typescript
import { NetInflow } from "@ariesdotcom/finance-dev/models";

let value: NetInflow = {
  nasdaqNetInflow: 125000000.5,
  nasdaqTradeCount: 8500000,
  nyseNetInflow: 98000000.25,
  nyseTradeCount: 6200000,
  timestamp: "2026-03-09T13:48:11.726532Z",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `nasdaqNetInflow`                                                                                                          | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Net inflow value for Nasdaq activity. Positive values indicate net buying flow; negative values indicate net selling flow. |
| `nasdaqTradeCount`                                                                                                         | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of Nasdaq trades included in the inflow calculation.                                                                |
| `nyseNetInflow`                                                                                                            | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Net inflow value for NYSE activity. Positive values indicate net buying flow; negative values indicate net selling flow.   |
| `nyseTradeCount`                                                                                                           | *number*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Number of NYSE trades included in the inflow calculation.                                                                  |
| `timestamp`                                                                                                                | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Data timestamp in ISO 8601 format; fractional seconds may be present (for example microseconds).                           |