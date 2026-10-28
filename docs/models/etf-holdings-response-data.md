# EtfHoldingsResponseData

ETF holdings payload.

## Example Usage

```typescript
import { EtfHoldingsResponseData } from "@ariesdotcom/finance-dev/models";

let value: EtfHoldingsResponseData = {};
```

## Fields

| Field                                    | Type                                     | Required                                 | Description                              |
| ---------------------------------------- | ---------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| `holdings`                               | [models.Holding](../models/holding.md)[] | :heavy_minus_sign:                       | List of holdings in the ETF.             |
| `numberOfHoldings`                       | *number*                                 | :heavy_minus_sign:                       | Total number of holdings in the ETF.     |
| `symbol`                                 | *string*                                 | :heavy_minus_sign:                       | ETF ticker symbol.                       |