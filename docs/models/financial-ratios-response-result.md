# FinancialRatiosResponseResult

## Example Usage

```typescript
import { FinancialRatiosResponseResult } from "finance-dev/models";

let value: FinancialRatiosResponseResult = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `averageVolume`                                       | *number*                                              | :heavy_minus_sign:                                    | Average trading volume in shares                      |
| `cash`                                                | *number*                                              | :heavy_minus_sign:                                    | Cash ratio                                            |
| `cik`                                                 | *string*                                              | :heavy_minus_sign:                                    | SEC Central Index Key of the company                  |
| `current`                                             | *number*                                              | :heavy_minus_sign:                                    | Current ratio (current assets to current liabilities) |
| `date`                                                | *string*                                              | :heavy_minus_sign:                                    | Date the ratios were calculated for (YYYY-MM-DD)      |
| `debtToEquity`                                        | *number*                                              | :heavy_minus_sign:                                    | Debt-to-equity ratio                                  |
| `dividendYield`                                       | *number*                                              | :heavy_minus_sign:                                    | Dividend yield                                        |
| `earningsPerShare`                                    | *number*                                              | :heavy_minus_sign:                                    | Earnings per share                                    |
| `enterpriseValue`                                     | *number*                                              | :heavy_minus_sign:                                    | Enterprise value                                      |
| `evToEbitda`                                          | *number*                                              | :heavy_minus_sign:                                    | Enterprise value to EBITDA ratio                      |
| `evToSales`                                           | *number*                                              | :heavy_minus_sign:                                    | Enterprise value to sales ratio                       |
| `freeCashFlow`                                        | *number*                                              | :heavy_minus_sign:                                    | Free cash flow                                        |
| `marketCap`                                           | *number*                                              | :heavy_minus_sign:                                    | Market capitalization                                 |
| `price`                                               | *number*                                              | :heavy_minus_sign:                                    | Stock price used to compute the ratios                |
| `priceToBook`                                         | *number*                                              | :heavy_minus_sign:                                    | Price-to-book (P/B) ratio                             |
| `priceToCashFlow`                                     | *number*                                              | :heavy_minus_sign:                                    | Price-to-cash-flow ratio                              |
| `priceToEarnings`                                     | *number*                                              | :heavy_minus_sign:                                    | Price-to-earnings (P/E) ratio                         |
| `priceToFreeCashFlow`                                 | *number*                                              | :heavy_minus_sign:                                    | Price-to-free-cash-flow ratio                         |
| `priceToSales`                                        | *number*                                              | :heavy_minus_sign:                                    | Price-to-sales (P/S) ratio                            |
| `quick`                                               | *number*                                              | :heavy_minus_sign:                                    | Quick ratio (liquid assets to current liabilities)    |
| `returnOnAssets`                                      | *number*                                              | :heavy_minus_sign:                                    | Return on assets                                      |
| `returnOnEquity`                                      | *number*                                              | :heavy_minus_sign:                                    | Return on equity                                      |
| `ticker`                                              | *string*                                              | :heavy_minus_sign:                                    | Stock ticker symbol                                   |