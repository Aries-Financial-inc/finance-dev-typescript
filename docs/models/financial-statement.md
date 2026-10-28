# FinancialStatement

Standardized income statement figures for a single reporting period.

## Example Usage

```typescript
import { FinancialStatement } from "@ariesdotcom/finance-dev/models";

let value: FinancialStatement = {};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `costOfGoodsSold`                                                  | *number*                                                           | :heavy_minus_sign:                                                 | Direct costs attributable to production of goods sold              |
| `dilutedAverageSharesOutstanding`                                  | *number*                                                           | :heavy_minus_sign:                                                 | Average number of shares outstanding including dilutive securities |
| `dilutedEPS`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | Earnings per share assuming dilution from convertible securities   |
| `ebit`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | Earnings Before Interest and Taxes                                 |
| `grossIncome`                                                      | *number*                                                           | :heavy_minus_sign:                                                 | Revenue minus cost of goods sold                                   |
| `interestIncomeExpense`                                            | *number*                                                           | :heavy_minus_sign:                                                 | Net interest income or expense from debt and investments           |
| `netIncome`                                                        | *number*                                                           | :heavy_minus_sign:                                                 | Total profit after all expenses and taxes                          |
| `netIncomeAfterTaxes`                                              | *number*                                                           | :heavy_minus_sign:                                                 | Net income after deducting income taxes                            |
| `nonRecurringItems`                                                | *number*                                                           | :heavy_minus_sign:                                                 | One-time or unusual items affecting income                         |
| `period`                                                           | *string*                                                           | :heavy_minus_sign:                                                 | Reporting period in YYYY-MM-DD format                              |
| `pretaxIncome`                                                     | *number*                                                           | :heavy_minus_sign:                                                 | Income before provision for income taxes                           |
| `provisionforIncomeTaxes`                                          | *number*                                                           | :heavy_minus_sign:                                                 | Estimated income tax expense for the period                        |
| `researchDevelopment`                                              | *number*                                                           | :heavy_minus_sign:                                                 | Expenses for research and development activities                   |
| `revenue`                                                          | *number*                                                           | :heavy_minus_sign:                                                 | Total revenue from operations                                      |
| `sgaExpense`                                                       | *number*                                                           | :heavy_minus_sign:                                                 | Selling, General, and Administrative expenses                      |
| `totalOperatingExpense`                                            | *number*                                                           | :heavy_minus_sign:                                                 | Sum of all operating expenses                                      |
| `totalOtherIncomeExpenseNet`                                       | *number*                                                           | :heavy_minus_sign:                                                 | Net of other income and expenses not related to operations         |
| `year`                                                             | *number*                                                           | :heavy_minus_sign:                                                 | Fiscal year of the financial statement                             |