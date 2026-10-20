# GetAnalystInsightsResponse

## Example Usage

```typescript
import { GetAnalystInsightsResponse } from "finance-dev/models/operations";

let value: GetAnalystInsightsResponse = {
  result: {
    insights: [
      {
        action: "Upgrade",
        analystInsights: "Raised price target on stronger services revenue.",
        date: "2026-01-10",
        firm: "Demo Research",
        firmId: "firm-42",
        id: "insight-001",
        pt: "210.00",
        rating: "Buy",
        ratingId: "r-8821",
        security: {
          cik: "0000320193",
          exchange: "NASDAQ",
          isin: "US0378331005",
          name: "Apple Inc.",
          symbol: "AAPL",
        },
        updated: 1736534400,
      },
    ],
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `result`                                                                    | [models.AnalystInsightsResponse](../../models/analyst-insights-response.md) | :heavy_check_mark:                                                          | N/A                                                                         |