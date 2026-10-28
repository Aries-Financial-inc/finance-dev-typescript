# EtfHoldingsResponse

Constituent holdings of an ETF from Finnhub.

## Example Usage

```typescript
import { EtfHoldingsResponse } from "@ariesdotcom/finance-dev/models";

let value: EtfHoldingsResponse = {};
```

## Fields

| Field                                                                     | Type                                                                      | Required                                                                  | Description                                                               |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `data`                                                                    | [models.EtfHoldingsResponseData](../models/etf-holdings-response-data.md) | :heavy_minus_sign:                                                        | ETF holdings payload.                                                     |