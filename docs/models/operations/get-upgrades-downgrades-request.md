# GetUpgradesDowngradesRequest

## Example Usage

```typescript
import { GetUpgradesDowngradesRequest } from "finance-dev/models/operations";

let value: GetUpgradesDowngradesRequest = {
  from: new Date("2024-01-01"),
  to: new Date("2024-12-31"),
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   | Example                                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                      | *string*                                                                                                                      | :heavy_minus_sign:                                                                                                            | Stock ticker to filter by. Send the plain uppercase symbol (e.g. `AAPL`). Omit to return data across all symbols.             |                                                                                                                               |
| `from`                                                                                                                        | [Date](../../types/rfcdate.md)                                                                                                | :heavy_minus_sign:                                                                                                            | Start of the date window, inclusive. Format: `YYYY-MM-DD` (e.g. `2024-01-01`). Omit to read from the earliest available data. | 2024-01-01                                                                                                                    |
| `to`                                                                                                                          | [Date](../../types/rfcdate.md)                                                                                                | :heavy_minus_sign:                                                                                                            | End of the date window, inclusive. Format: `YYYY-MM-DD` (e.g. `2024-12-31`). Omit to read up to today.                        | 2024-12-31                                                                                                                    |