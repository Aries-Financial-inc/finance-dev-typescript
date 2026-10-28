# GetInstitutionalPortfolioRequest

## Example Usage

```typescript
import { GetInstitutionalPortfolioRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetInstitutionalPortfolioRequest = {
  cik: "0001067983",
  from: new Date("2024-01-01"),
  to: new Date("2024-12-31"),
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `cik`                                                                                    | *string*                                                                                 | :heavy_check_mark:                                                                       | Central Index Key (CIK) of the institution.                                              | 0001067983                                                                               |
| `from`                                                                                   | [Date](../../types/rfcdate.md)                                                           | :heavy_check_mark:                                                                       | Start date in YYYY-MM-DD format. Enter the first date to include in the research window. | 2024-01-01                                                                               |
| `to`                                                                                     | [Date](../../types/rfcdate.md)                                                           | :heavy_check_mark:                                                                       | End date in YYYY-MM-DD format. Enter the last date to include in the research window.    | 2024-12-31                                                                               |