# EtfSectorAllocationResponseData

ETF sector exposure payload.

## Example Usage

```typescript
import { EtfSectorAllocationResponseData } from "@ariesdotcom/finance-dev/models";

let value: EtfSectorAllocationResponseData = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `sectorExposure`                                        | [models.SectorExposure](../models/sector-exposure.md)[] | :heavy_minus_sign:                                      | List of sector exposures for the ETF.                   |
| `symbol`                                                | *string*                                                | :heavy_minus_sign:                                      | ETF ticker symbol.                                      |