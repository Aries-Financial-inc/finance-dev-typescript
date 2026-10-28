# GetOrdersV2Response

Paginated v2 orders response from **GET /v2/accounts/{id}/orders** and **GET /v2/accounts/{id}/orders/history**. Both fields are always present.

## Example Usage

```typescript
import { GetOrdersV2Response } from "@ariesdotcom/finance-dev/models";

let value: GetOrdersV2Response = {
  orders: null,
};
```

## Fields

| Field                                                                                                                                                                                                       | Type                                                                                                                                                                                                        | Required                                                                                                                                                                                                    | Description                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `nextCursor`                                                                                                                                                                                                | *number*                                                                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                                                                          | Opaque pagination cursor. Pass as `cursor` on the next request. Value `0` means the walk is exhausted.                                                                                                      |
| `orders`                                                                                                                                                                                                    | [models.TradeOrderV2](../models/trade-order-v2.md)[]                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                          | Page of orders in v2 domain shape (`TradeOrderV2`). `null` from **GET /v2/accounts/{id}/orders** when the account has no active orders; an empty array from the history endpoint when there are no matches. |