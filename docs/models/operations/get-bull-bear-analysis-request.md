# GetBullBearAnalysisRequest

## Example Usage

```typescript
import { GetBullBearAnalysisRequest } from "finance-dev/models/operations";

let value: GetBullBearAnalysisRequest = {
  symbols: "AAPL,MSFT",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `symbols`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Comma-separated list of ticker symbols                                                 | AAPL,MSFT                                                                              |
| `page`                                                                                 | *number*                                                                               | :heavy_minus_sign:                                                                     | Page number for pagination (0-based)                                                   |                                                                                        |
| `pageSize`                                                                             | *number*                                                                               | :heavy_minus_sign:                                                                     | Number of results per page. Use this to control pagination size in list views. (1-200) |                                                                                        |