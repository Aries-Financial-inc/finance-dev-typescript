# GetFilingsSimilarityIndexRequest

## Example Usage

```typescript
import { GetFilingsSimilarityIndexRequest } from "finance-dev/models/operations";

let value: GetFilingsSimilarityIndexRequest = {
  symbol: "MSFT",
  freq: "quarterly",
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                  | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Stock symbol, such as AAPL. Use it to narrow results to one company. Required when `cik` is not provided. | MSFT                                                                                                      |
| `cik`                                                                                                     | *string*                                                                                                  | :heavy_minus_sign:                                                                                        | Central Index Key. Required when `symbol` is not provided.                                                |                                                                                                           |
| `freq`                                                                                                    | [models.ReportingFrequency](../../models/reporting-frequency.md)                                          | :heavy_minus_sign:                                                                                        | Reporting frequency filter. Use annual or quarterly when you want only one reporting cadence.             | quarterly                                                                                                 |