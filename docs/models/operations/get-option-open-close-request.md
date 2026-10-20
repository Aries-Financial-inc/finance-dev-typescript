# GetOptionOpenCloseRequest

## Example Usage

```typescript
import { GetOptionOpenCloseRequest } from "finance-dev/models/operations";

let value: GetOptionOpenCloseRequest = {
  ticker: "<value>",
  date: new Date("2026-08-09"),
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `ticker`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | OCC option ticker symbol (e.g., O:AAPL251219C00150000)                         |
| `date`                                                                         | [Date](../../types/rfcdate.md)                                                 | :heavy_check_mark:                                                             | Date in YYYY-MM-DD format. Enter the specific calendar date you want to query. |