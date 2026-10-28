# BullBearCase

## Example Usage

```typescript
import { BullBearCase } from "@ariesdotcom/finance-dev/models";

let value: BullBearCase = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `bearCase`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Bearish investment thesis describing risks and potential challenges                            |
| `bullCase`                                                                                     | *string*                                                                                       | :heavy_minus_sign:                                                                             | Bullish investment thesis describing positive factors and growth opportunities                 |
| `id`                                                                                           | *string*                                                                                       | :heavy_minus_sign:                                                                             | Unique identifier for the bull/bear case analysis                                              |
| `securities`                                                                                   | [models.BullBearAnalysisResponseSecurity](../models/bull-bear-analysis-response-security.md)[] | :heavy_minus_sign:                                                                             | Array of securities associated with this ticker                                                |
| `ticker`                                                                                       | *string*                                                                                       | :heavy_minus_sign:                                                                             | Stock ticker symbol, such as AAPL. Use the exact ticker for the company you want to research.  |
| `updated`                                                                                      | *number*                                                                                       | :heavy_minus_sign:                                                                             | Unix timestamp when the analysis was last updated                                              |