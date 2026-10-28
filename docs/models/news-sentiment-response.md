# NewsSentimentResponse

News sentiment and buzz metrics for a company from Finnhub.

## Example Usage

```typescript
import { NewsSentimentResponse } from "@ariesdotcom/finance-dev/models";

let value: NewsSentimentResponse = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `buzz`                                               | [models.Buzz](../models/buzz.md)                     | :heavy_minus_sign:                                   | News buzz metrics for the company.                   |
| `companyNewsScore`                                   | *number*                                             | :heavy_minus_sign:                                   | News score for the company.                          |
| `sectorAverageBullishPercent`                        | *number*                                             | :heavy_minus_sign:                                   | Average bullish percent across the company's sector. |
| `sectorAverageNewsScore`                             | *number*                                             | :heavy_minus_sign:                                   | Average news score across the company's sector.      |
| `sentiment`                                          | [models.Sentiment](../models/sentiment.md)           | :heavy_minus_sign:                                   | News sentiment breakdown.                            |
| `symbol`                                             | *string*                                             | :heavy_minus_sign:                                   | Ticker symbol the sentiment applies to.              |