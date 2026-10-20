# IndexBarResponse

Response containing a single OHLC bar for an index along with the index metadata.

## Example Usage

```typescript
import { IndexBarResponse } from "finance-dev/models";

let value: IndexBarResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `bar`                                                                 | [models.IndexBarResponseBar](../models/index-bar-response-bar.md)     | :heavy_minus_sign:                                                    | OHLC bar data for the requested time period                           |
| `index`                                                               | [models.IndexBarResponseIndex](../models/index-bar-response-index.md) | :heavy_minus_sign:                                                    | Index metadata and identification                                     |