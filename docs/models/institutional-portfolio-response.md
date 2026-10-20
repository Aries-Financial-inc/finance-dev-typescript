# InstitutionalPortfolioResponse

Response containing an institutional investor's portfolio holdings.

## Example Usage

```typescript
import { InstitutionalPortfolioResponse } from "finance-dev/models";

let value: InstitutionalPortfolioResponse = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `holdings`                                                          | [models.InstitutionalHolding](../models/institutional-holding.md)[] | :heavy_minus_sign:                                                  | List of holdings in an institutional investor's portfolio           |