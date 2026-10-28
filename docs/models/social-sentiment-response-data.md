# SocialSentimentResponseData

## Example Usage

```typescript
import { SocialSentimentResponseData } from "@ariesdotcom/finance-dev/models";

let value: SocialSentimentResponseData = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `atTime`                                                    | *string*                                                    | :heavy_minus_sign:                                          | Timestamp of the data point as provided by the data vendor. |
| `mention`                                                   | *number*                                                    | :heavy_minus_sign:                                          | Total number of mentions.                                   |
| `negativeMention`                                           | *number*                                                    | :heavy_minus_sign:                                          | Number of negative mentions.                                |
| `negativeScore`                                             | *number*                                                    | :heavy_minus_sign:                                          | Negative sentiment score.                                   |
| `positiveMention`                                           | *number*                                                    | :heavy_minus_sign:                                          | Number of positive mentions.                                |
| `positiveScore`                                             | *number*                                                    | :heavy_minus_sign:                                          | Positive sentiment score.                                   |
| `score`                                                     | *number*                                                    | :heavy_minus_sign:                                          | Overall sentiment score.                                    |