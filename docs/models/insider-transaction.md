# InsiderTransaction

Single insider trading transaction reported on SEC Form 4.

## Example Usage

```typescript
import { InsiderTransaction } from "finance-dev/models";

let value: InsiderTransaction = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `change`                                                         | *number*                                                         | :heavy_minus_sign:                                               | Net change in shares held after the transaction                  |
| `filingDate`                                                     | *string*                                                         | :heavy_minus_sign:                                               | Date when the Form 4 was filed with the SEC in YYYY-MM-DD format |
| `name`                                                           | *string*                                                         | :heavy_minus_sign:                                               | Name of the insider (executive, director, or beneficial owner)   |
| `share`                                                          | *number*                                                         | :heavy_minus_sign:                                               | Number of shares involved in the transaction                     |
| `symbol`                                                         | *string*                                                         | :heavy_minus_sign:                                               | Stock ticker symbol                                              |
| `transactionCode`                                                | *string*                                                         | :heavy_minus_sign:                                               | SEC transaction code (P=Purchase, S=Sale, A=Award, etc.)         |
| `transactionDate`                                                | *string*                                                         | :heavy_minus_sign:                                               | Date when the transaction occurred in YYYY-MM-DD format          |
| `transactionPrice`                                               | *number*                                                         | :heavy_minus_sign:                                               | Price per share at which the transaction was executed            |