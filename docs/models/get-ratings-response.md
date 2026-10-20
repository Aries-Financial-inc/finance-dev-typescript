# GetRatingsResponse

Response for GET /v1/analytics/ratings. Only non-empty fields appear in each rating; notes and ratings_accuracy are omitted when empty.

## Example Usage

```typescript
import { GetRatingsResponse } from "finance-dev/models";

let value: GetRatingsResponse = {
  ratings: [
    {
      actionCompany: "maintain",
      actionPt: "raised",
      analyst: "jdoe",
      analystId: "an-9001",
      analystName: "Jane Doe",
      currency: "USD",
      date: "2026-01-12",
      exchange: "NASDAQ",
      id: "rate-1001",
      importance: 2,
      name: "Apple Inc.",
      notes: "Services outlook improved.",
      ptCurrent: 210,
      ptCurrentAdjusted: 208.5,
      ptPrior: 195,
      ptPriorAdjusted: 194,
      ratingCurrent: "Buy",
      ratingPrior: "Hold",
      ratingsAccuracy: {
        avgReturn1m: 0.021,
        avgReturn1y: 0.18,
        avgReturn2y: 0.31,
        avgReturn3m: 0.055,
        avgReturn3y: 0.42,
        avgReturn9m: 0.12,
        gainCount1m: 8,
        gainCount1y: 72,
        gainCount2y: 130,
        gainCount3m: 22,
        gainCount3y: 180,
        gainCount9m: 58,
        lossCount1m: 3,
        lossCount1y: 28,
        lossCount2y: 48,
        lossCount3m: 9,
        lossCount3y: 65,
        lossCount9m: 21,
        smartScore: 72.5,
        stdDevReturn1m: 0.045,
        stdDevReturn1y: 0.22,
        stdDevReturn2y: 0.28,
        stdDevReturn3m: 0.09,
        stdDevReturn3y: 0.33,
        stdDevReturn9m: 0.14,
        successRate: 0.68,
        totalRatings: 140,
      },
      ticker: "AAPL",
      time: "09:45:00",
      updated: "2026-01-12T09:45:00Z",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `ratings`                              | [models.Rating](../models/rating.md)[] | :heavy_minus_sign:                     | Array of analyst rating objects        |