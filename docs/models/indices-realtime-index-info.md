# IndicesRealtimeIndexInfo

Index metadata for a realtime quote item.

## Example Usage

```typescript
import { IndicesRealtimeIndexInfo } from "@ariesdotcom/finance-dev/models";

let value: IndicesRealtimeIndexInfo = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `currency`                                | *string*                                  | :heavy_minus_sign:                        | Quote currency                            |
| `indexGroup`                              | *string*                                  | :heavy_minus_sign:                        | Index group or venue code (e.g. IND_CBOM) |
| `indexName`                               | *string*                                  | :heavy_minus_sign:                        | Display name of the index                 |
| `symbol`                                  | *string*                                  | :heavy_minus_sign:                        | Index symbol (e.g. SPX)                   |
| `valoren`                                 | *string*                                  | :heavy_minus_sign:                        | Valoren / internal identifier             |