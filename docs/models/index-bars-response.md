# IndexBarsResponse

Response containing OHLC bars for an index.

## Example Usage

```typescript
import { IndexBarsResponse } from "finance-dev/models";

let value: IndexBarsResponse = {};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `bars`                                                                | [models.IndexBarsResponseBar](../models/index-bars-response-bar.md)[] | :heavy_minus_sign:                                                    | Array of index OHLC bars                                              |