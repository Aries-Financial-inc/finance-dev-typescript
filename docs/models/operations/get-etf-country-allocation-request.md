# GetEtfCountryAllocationRequest

## Example Usage

```typescript
import { GetEtfCountryAllocationRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetEtfCountryAllocationRequest = {
  symbol: "<value>",
};
```

## Fields

| Field                                                                                                                                                                                         | Type                                                                                                                                                                                          | Required                                                                                                                                                                                      | Description                                                                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                                                                                      | *string*                                                                                                                                                                                      | :heavy_check_mark:                                                                                                                                                                            | ETF ticker to query. Send the plain uppercase symbol, e.g. `SPY`, `QQQ`, `IWM`.                                                                                                               |
| `isin`                                                                                                                                                                                        | *string*                                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                                            | ISIN identifier — the 12-character International Securities Identification Number for the instrument (e.g. `US0378331005` for Apple). Provide this instead of `symbol` when you have an ISIN. |