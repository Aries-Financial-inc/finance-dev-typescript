# EconomicsIndicator

Single historical data point for an economic indicator.

## Example Usage

```typescript
import { EconomicsIndicator } from "finance-dev/models";

let value: EconomicsIndicator = {
  category: "Employment",
  country: "US",
  dateTime: "2026-01-15T08:30:00Z",
  frequency: "monthly",
  historicalDataSymbol: "USURTOT",
  lastUpdate: "2026-01-15T08:30:00Z",
  value: 3.7,
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `category`                                                                                                                           | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Category label for the economic event/indicator (e.g. `GDP`, `Inflation`, `Employment`). Format depends on the upstream data source. |
| `country`                                                                                                                            | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Country code or name                                                                                                                 |
| `dateTime`                                                                                                                           | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Date and time of the data point                                                                                                      |
| `frequency`                                                                                                                          | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Data frequency (e.g., monthly, quarterly, yearly)                                                                                    |
| `historicalDataSymbol`                                                                                                               | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Symbol identifier for the historical data                                                                                            |
| `lastUpdate`                                                                                                                         | *string*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Last update timestamp                                                                                                                |
| `value`                                                                                                                              | *number*                                                                                                                             | :heavy_minus_sign:                                                                                                                   | Indicator value                                                                                                                      |