# UpgradesDowngradesResponse

Analyst rating upgrades and downgrades for a stock, sourced from Finnhub.

## Example Usage

```typescript
import { UpgradesDowngradesResponse } from "finance-dev/models";

let value: UpgradesDowngradesResponse = {};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `data`                                                                                    | [models.UpgradesDowngradesResponseData](../models/upgrades-downgrades-response-data.md)[] | :heavy_minus_sign:                                                                        | List of analyst rating change events                                                      |