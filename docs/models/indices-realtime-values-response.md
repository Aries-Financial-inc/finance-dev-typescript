# IndicesRealtimeValuesResponse

Batch realtime index quotes returned by GET /v1/indices/realtime/values.

## Example Usage

```typescript
import { IndicesRealtimeValuesResponse } from "finance-dev/models";

let value: IndicesRealtimeValuesResponse = {
  items: [
    {
      identifier: "<value>",
      identifierType: "Symbol",
      index: {},
      value: {},
    },
  ],
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `items`                                                                         | [models.IndicesRealtimeValuesItem](../models/indices-realtime-values-item.md)[] | :heavy_minus_sign:                                                              | One entry per requested identifier                                              |