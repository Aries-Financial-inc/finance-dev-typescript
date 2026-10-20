# EtfSectorAllocationResponse

Sector exposure breakdown of an ETF from Finnhub.

## Example Usage

```typescript
import { EtfSectorAllocationResponse } from "finance-dev/models";

let value: EtfSectorAllocationResponse = {};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `data`                                                                                     | [models.EtfSectorAllocationResponseData](../models/etf-sector-allocation-response-data.md) | :heavy_minus_sign:                                                                         | ETF sector exposure payload.                                                               |