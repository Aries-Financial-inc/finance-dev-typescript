# AggregateTechnicalIndicatorsResponse

Aggregate technical indicator signal and trend strength for a symbol and resolution from Finnhub.

## Example Usage

```typescript
import { AggregateTechnicalIndicatorsResponse } from "finance-dev/models";

let value: AggregateTechnicalIndicatorsResponse = {};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `data`                                                                                                       | [models.AggregateTechnicalIndicatorsResponseData](../models/aggregate-technical-indicators-response-data.md) | :heavy_minus_sign:                                                                                           | Aggregate indicators payload.                                                                                |