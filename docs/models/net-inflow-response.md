# NetInflowResponse

Response envelope for the net inflow endpoint.

## Example Usage

```typescript
import { NetInflowResponse } from "@ariesdotcom/finance-dev/models";

let value: NetInflowResponse = {
  data: {
    nasdaqNetInflow: 125000000.5,
    nasdaqTradeCount: 8500000,
    nyseNetInflow: 98000000.25,
    nyseTradeCount: 6200000,
    timestamp: "2026-03-09T13:48:11.726532Z",
  },
};
```

## Fields

| Field                                                                                                                                                                | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          | Example                                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                                                               | [models.NetInflow](../models/net-inflow.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                                   | Net market inflow snapshot for Nasdaq and NYSE. Use it to show whether reported flow is net buying or net selling.                                                   | {<br/>"nasdaqNetInflow": 125000000.5,<br/>"nasdaqTradeCount": 8500000,<br/>"nyseNetInflow": 98000000.25,<br/>"nyseTradeCount": 6200000,<br/>"timestamp": "2026-03-09T13:48:11.726532Z"<br/>} |
| `success`                                                                                                                                                            | *boolean*                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                   | Always true on a successful response.                                                                                                                                |                                                                                                                                                                      |