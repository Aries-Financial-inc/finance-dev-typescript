# GetOptionsUnusualActivityRequest

## Example Usage

```typescript
import { GetOptionsUnusualActivityRequest } from "finance-dev/models/operations";

let value: GetOptionsUnusualActivityRequest = {
  symbol: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `symbol`                                               | *string*                                               | :heavy_check_mark:                                     | Underlying stock symbol (e.g. AAPL, TSLA).             |
| `source`                                               | [operations.Source](../../models/operations/source.md) | :heavy_minus_sign:                                     | Data source. Values are case-insensitive.              |