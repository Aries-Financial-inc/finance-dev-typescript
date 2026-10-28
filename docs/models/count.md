# Count

Number of indicators giving each signal.

## Example Usage

```typescript
import { Count } from "@ariesdotcom/finance-dev/models";

let value: Count = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `buy`                                         | *number*                                      | :heavy_minus_sign:                            | Number of indicators giving a buy signal.     |
| `neutral`                                     | *number*                                      | :heavy_minus_sign:                            | Number of indicators giving a neutral signal. |
| `sell`                                        | *number*                                      | :heavy_minus_sign:                            | Number of indicators giving a sell signal.    |