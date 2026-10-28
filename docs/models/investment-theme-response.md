# InvestmentThemeResponse

Companies belonging to an investment theme.

## Example Usage

```typescript
import { InvestmentThemeResponse } from "@ariesdotcom/finance-dev/models";

let value: InvestmentThemeResponse = {
  theme: "ai",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `data`                                                                                                                      | [models.InvestmentThemeResponseData](../models/investment-theme-response-data.md)[]                                         | :heavy_minus_sign:                                                                                                          | Companies in the investment theme.                                                                                          |                                                                                                                             |
| `theme`                                                                                                                     | [models.InvestmentThemeId](../models/investment-theme-id.md)                                                                | :heavy_minus_sign:                                                                                                          | Investment theme identifier. Pick a theme to filter or look up stocks tied to that thesis (e.g. AI, fintech, clean energy). | ai                                                                                                                          |