# GetHistoryResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { GetHistoryResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: GetHistoryResponse = {
  data: {
    count: 521520,
    symbol: "<value>",
    ticks: [],
  },
  success: true,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `data`                                                                   | [models.PredMdHistoryResponse](../../models/pred-md-history-response.md) | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |
| `success`                                                                | *boolean*                                                                | :heavy_check_mark:                                                       | N/A                                                                      | true                                                                     |