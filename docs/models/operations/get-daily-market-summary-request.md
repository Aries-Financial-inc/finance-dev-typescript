# GetDailyMarketSummaryRequest

## Example Usage

```typescript
import { GetDailyMarketSummaryRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetDailyMarketSummaryRequest = {
  date: new Date("2024-01-15"),
  adjusted: true,
  includeOtc: false,
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           | Example                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `date`                                                                                                                | [Date](../../types/rfcdate.md)                                                                                        | :heavy_check_mark:                                                                                                    | Date in YYYY-MM-DD format. Enter the specific calendar date you want to query.                                        | 2024-01-15                                                                                                            |
| `adjusted`                                                                                                            | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | Whether to adjust historical prices for stock splits. Use true for normalized charting and false for raw market data. | true                                                                                                                  |
| `includeOtc`                                                                                                          | *boolean*                                                                                                             | :heavy_minus_sign:                                                                                                    | Whether to include over-the-counter securities. Use true only when your product needs OTC market coverage.            | false                                                                                                                 |