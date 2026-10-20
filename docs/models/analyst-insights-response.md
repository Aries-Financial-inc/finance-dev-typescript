# AnalystInsightsResponse

Response containing analyst insights.

## Example Usage

```typescript
import { AnalystInsightsResponse } from "finance-dev/models";

let value: AnalystInsightsResponse = {
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
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `insights`                                                       | [models.AnalystInsightItem](../models/analyst-insight-item.md)[] | :heavy_minus_sign:                                               | Array of analyst insights                                        |