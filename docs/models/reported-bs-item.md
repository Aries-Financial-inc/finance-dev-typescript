# ReportedBSItem

Single balance sheet line item from a reported filing.

## Example Usage

```typescript
import { ReportedBSItem } from "finance-dev/models";

let value: ReportedBSItem = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `concept`                                               | *string*                                                | :heavy_minus_sign:                                      | XBRL concept tag identifier for the financial line item |
| `label`                                                 | *string*                                                | :heavy_minus_sign:                                      | Human-readable label for the financial line item        |
| `unit`                                                  | *string*                                                | :heavy_minus_sign:                                      | Unit of measurement (e.g., USD, shares)                 |
| `value`                                                 | *number*                                                | :heavy_minus_sign:                                      | Numerical value of the financial line item              |