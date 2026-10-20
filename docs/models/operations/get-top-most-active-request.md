# GetTopMostActiveRequest

## Example Usage

```typescript
import { GetTopMostActiveRequest } from "finance-dev/models/operations";

let value: GetTopMostActiveRequest = {};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `limit`                                                                                                                                      | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Maximum number of results to return. Use smaller values for UI pages and larger values for exports within API limits. (optional, default 10) |
| `size`                                                                                                                                       | *number*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Alias for limit. Ignored when limit is supplied.                                                                                             |