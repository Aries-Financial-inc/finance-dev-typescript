# EarningSurprise

## Example Usage

```typescript
import { EarningSurprise } from "finance-dev/models";

let value: EarningSurprise = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `actual`                                      | *number*                                      | :heavy_minus_sign:                            | Reported actual earnings per share            |
| `estimate`                                    | *number*                                      | :heavy_minus_sign:                            | Analyst consensus earnings per share estimate |
| `period`                                      | *string*                                      | :heavy_minus_sign:                            | End date of the reporting period              |
| `quarter`                                     | *number*                                      | :heavy_minus_sign:                            | Fiscal quarter number                         |
| `surprise`                                    | *number*                                      | :heavy_minus_sign:                            | Difference between actual and estimate        |
| `surprisePercent`                             | *number*                                      | :heavy_minus_sign:                            | Surprise as a percentage of the estimate      |
| `symbol`                                      | *string*                                      | :heavy_minus_sign:                            | Stock ticker symbol                           |
| `year`                                        | *number*                                      | :heavy_minus_sign:                            | Fiscal year                                   |