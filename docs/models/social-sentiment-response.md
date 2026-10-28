# SocialSentimentResponse

Social media sentiment time series for a symbol.

## Example Usage

```typescript
import { SocialSentimentResponse } from "@ariesdotcom/finance-dev/models";

let value: SocialSentimentResponse = {};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `data`                                                                              | [models.SocialSentimentResponseData](../models/social-sentiment-response-data.md)[] | :heavy_minus_sign:                                                                  | Sentiment data points.                                                              |
| `symbol`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | Ticker symbol of the company.                                                       |