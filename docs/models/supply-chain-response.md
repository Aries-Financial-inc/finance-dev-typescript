# SupplyChainResponse

Supply chain relationships (suppliers and customers) for a company.

## Example Usage

```typescript
import { SupplyChainResponse } from "@ariesdotcom/finance-dev/models";

let value: SupplyChainResponse = {};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `data`                                                                      | [models.SupplyChainResponseData](../models/supply-chain-response-data.md)[] | :heavy_minus_sign:                                                          | Related companies in the supply chain.                                      |
| `symbol`                                                                    | *string*                                                                    | :heavy_minus_sign:                                                          | Ticker symbol of the company.                                               |