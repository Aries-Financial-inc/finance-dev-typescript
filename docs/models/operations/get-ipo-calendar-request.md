# GetIpoCalendarRequest

## Example Usage

```typescript
import { GetIpoCalendarRequest } from "finance-dev/models/operations";

let value: GetIpoCalendarRequest = {
  from: new Date("2024-01-01"),
  to: new Date("2024-12-31"),
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `from`                                                                                   | [Date](../../types/rfcdate.md)                                                           | :heavy_check_mark:                                                                       | Start date in YYYY-MM-DD format. Enter the first date to include in the research window. | 2024-01-01                                                                               |
| `to`                                                                                     | [Date](../../types/rfcdate.md)                                                           | :heavy_check_mark:                                                                       | End date in YYYY-MM-DD format. Enter the last date to include in the research window.    | 2024-12-31                                                                               |