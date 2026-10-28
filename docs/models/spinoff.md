# Spinoff

## Example Usage

```typescript
import { Spinoff } from "@ariesdotcom/finance-dev/models";

let value: Spinoff = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `declaredDate`                                                                         | [Date](../types/rfcdate.md)                                                            | :heavy_minus_sign:                                                                     | Date when the spinoff was announced (YYYY-MM-DD format)                                |
| `description`                                                                          | *string*                                                                               | :heavy_minus_sign:                                                                     | Description of the spinoff transaction                                                 |
| `exDate`                                                                               | [Date](../types/rfcdate.md)                                                            | :heavy_minus_sign:                                                                     | Ex-date when the stock trades without spinoff rights (YYYY-MM-DD format)               |
| `fromCompanyName`                                                                      | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the parent company                                                             |
| `fromSymbol`                                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | Ticker symbol of the parent company                                                    |
| `paymentDate`                                                                          | [Date](../types/rfcdate.md)                                                            | :heavy_minus_sign:                                                                     | Date when spun-off shares are distributed to shareholders (YYYY-MM-DD format)          |
| `ratio`                                                                                | *string*                                                                               | :heavy_minus_sign:                                                                     | Distribution ratio (e.g., 1:1 means one share of new company for each share of parent) |
| `recordDate`                                                                           | [Date](../types/rfcdate.md)                                                            | :heavy_minus_sign:                                                                     | Date determining which shareholders receive the spinoff (YYYY-MM-DD format)            |
| `toCompanyName`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | Name of the spun-off company                                                           |
| `toSymbol`                                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | Ticker symbol of the spun-off company                                                  |