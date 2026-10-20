# SectorAvgChange

Average percentage move by sector. Use it to compare which sectors are leading or lagging the market.

## Example Usage

```typescript
import { SectorAvgChange } from "finance-dev/models";

let value: SectorAvgChange = {
  avgChange: 1.25,
  sector: "TECHNOLOGY",
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `avgChange`                                                                                     | *number*                                                                                        | :heavy_minus_sign:                                                                              | Average percentage change for the sector                                                        |
| `sector`                                                                                        | *string*                                                                                        | :heavy_minus_sign:                                                                              | Sector name, such as Technology or Financials. Use it as the label in sector performance views. |