# CompanyPeersResponse

Response containing peer company tickers for comparison and competitor research.

## Example Usage

```typescript
import { CompanyPeersResponse } from "@ariesdotcom/finance-dev/models";

let value: CompanyPeersResponse = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `peers`                                                             | *string*[]                                                          | :heavy_minus_sign:                                                  | List of ticker symbols for companies in the same industry or sector |