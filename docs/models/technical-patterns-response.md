# TechnicalPatternsResponse

Chart patterns detected by Finnhub pattern recognition for a symbol and resolution.

## Example Usage

```typescript
import { TechnicalPatternsResponse } from "@ariesdotcom/finance-dev/models";

let value: TechnicalPatternsResponse = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `data`                                                                                | [models.TechnicalPatternsResponseData](../models/technical-patterns-response-data.md) | :heavy_minus_sign:                                                                    | Pattern recognition payload.                                                          |