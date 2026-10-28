# AnalystInsightItem

Single analyst insight (GET /v1/analytics/insights).

## Example Usage

```typescript
import { AnalystInsightItem } from "@ariesdotcom/finance-dev/models";

let value: AnalystInsightItem = {
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
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `action`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Analyst action such as upgrade, downgrade, initiation, or reiteration. Use it to explain what changed.         |
| `analystInsights`                                                                                              | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Plain-English analyst note or summary. Show this as the explanation behind the rating action.                  |
| `date`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Date the analyst insight was published. Use it to sort or filter recent analyst changes.                       |
| `firm`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Research firm that published the insight. Show this so users know the source.                                  |
| `firmId`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Provider identifier for the research firm. Use it for filtering or grouping by firm.                           |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Unique insight identifier. Use it for linking, deduping, or storing this analyst insight.                      |
| `pt`                                                                                                           | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Analyst price target as a decimal string. Use it to show expected upside or downside versus the current price. |
| `rating`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Analyst rating label such as Buy, Hold, or Sell. Use it as the business recommendation text.                   |
| `ratingId`                                                                                                     | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | Provider identifier for the rating record. Use it for deduping or linking insight data to rating data.         |
| `security`                                                                                                     | [models.AnalystInsightItemSecurity](../models/analyst-insight-item-security.md)                                | :heavy_minus_sign:                                                                                             | Security metadata for the company or instrument this analyst insight covers.                                   |
| `updated`                                                                                                      | *number*                                                                                                       | :heavy_minus_sign:                                                                                             | Last updated timestamp from the data provider. Use it to know whether a stored insight has changed.            |