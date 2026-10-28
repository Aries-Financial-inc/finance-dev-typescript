# Covid19UsCasesResponse

COVID-19 case and death counts for US states, as provided by Finnhub.

## Example Usage

```typescript
import { Covid19UsCasesResponse } from "@ariesdotcom/finance-dev/models";

let value: Covid19UsCasesResponse = {};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `data`                                                                             | [models.Covid19UsCasesResponseData](../models/covid19-us-cases-response-data.md)[] | :heavy_minus_sign:                                                                 | COVID-19 statistics, one entry per US state.                                       |