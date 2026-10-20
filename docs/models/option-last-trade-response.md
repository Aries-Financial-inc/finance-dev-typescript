# OptionLastTradeResponse

Most recent trade for an options contract.

## Example Usage

```typescript
import { OptionLastTradeResponse } from "finance-dev/models";

let value: OptionLastTradeResponse = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `requestId`                                                                                                                                                           | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Unique request ID                                                                                                                                                     |
| `results`                                                                                                                                                             | [models.OptionLastTradeResponseResults](../models/option-last-trade-response-results.md)                                                                              | :heavy_minus_sign:                                                                                                                                                    | Last options trade object                                                                                                                                             |
| `status`                                                                                                                                                              | *string*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | Status string from the upstream data provider — typically `OK` for a successful response. Treat any other value as an error indicator alongside the HTTP status code. |