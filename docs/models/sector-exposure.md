# SectorExposure

## Example Usage

```typescript
import { SectorExposure } from "@ariesdotcom/finance-dev/models";

let value: SectorExposure = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `exposure`                                                      | *number*                                                        | :heavy_minus_sign:                                              | Exposure of the ETF to this sector as reported by the provider. |
| `industry`                                                      | *string*                                                        | :heavy_minus_sign:                                              | Name of the sector or industry.                                 |