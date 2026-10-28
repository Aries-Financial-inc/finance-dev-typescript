# OptionContractsResponse

Response containing the call and put option contracts for an underlying symbol and expiration date.

## Example Usage

```typescript
import { OptionContractsResponse } from "@ariesdotcom/finance-dev/models";

let value: OptionContractsResponse = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `calls`                                       | [models.Call](../models/call.md)[]            | :heavy_minus_sign:                            | Call option contracts for the expiration date |
| `expiryDate`                                  | [Date](../types/rfcdate.md)                   | :heavy_minus_sign:                            | Expiration date YYYY-MM-DD                    |
| `puts`                                        | [models.Put](../models/put.md)[]              | :heavy_minus_sign:                            | Put option contracts for the expiration date  |
| `symbol`                                      | *string*                                      | :heavy_minus_sign:                            | Underlying symbol                             |