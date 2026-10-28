# BankBranchesResponse

List of US bank branches for a company, as provided by Finnhub.

## Example Usage

```typescript
import { BankBranchesResponse } from "@ariesdotcom/finance-dev/models";

let value: BankBranchesResponse = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `data`                                                                        | [models.BankBranchesResponseData](../models/bank-branches-response-data.md)[] | :heavy_minus_sign:                                                            | Bank branches for the symbol.                                                 |
| `symbol`                                                                      | *string*                                                                      | :heavy_minus_sign:                                                            | Company ticker symbol.                                                        |