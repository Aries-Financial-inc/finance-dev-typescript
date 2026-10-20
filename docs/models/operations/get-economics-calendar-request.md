# GetEconomicsCalendarRequest

## Example Usage

```typescript
import { GetEconomicsCalendarRequest } from "finance-dev/models/operations";

let value: GetEconomicsCalendarRequest = {
  date: new Date("2024-01-15"),
  from: new Date("2024-01-15"),
  to: new Date("2024-03-15"),
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `date`                                                                                                                       | [Date](../../types/rfcdate.md)                                                                                               | :heavy_minus_sign:                                                                                                           | Single date in YYYY-MM-DD format. Returns events for that date plus 1 month ahead. Either 'date' or 'from' must be provided. | 2024-01-15                                                                                                                   |
| `from`                                                                                                                       | [Date](../../types/rfcdate.md)                                                                                               | :heavy_minus_sign:                                                                                                           | Start date of range in YYYY-MM-DD format. Must be used with 'to'. Either 'date' or 'from' must be provided.                  | 2024-01-15                                                                                                                   |
| `to`                                                                                                                         | [Date](../../types/rfcdate.md)                                                                                               | :heavy_minus_sign:                                                                                                           | End date of range in YYYY-MM-DD format. Required when 'from' is specified.                                                   | 2024-03-15                                                                                                                   |