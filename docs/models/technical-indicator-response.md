# TechnicalIndicatorResponse

Technical indicator values for a symbol over a time range, as returned by Finnhub; the keys present depend on the requested indicator.

## Example Usage

```typescript
import { TechnicalIndicatorResponse } from "finance-dev/models";

let value: TechnicalIndicatorResponse = {};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `sma`                                                 | *number*[]                                            | :heavy_minus_sign:                                    | Simple moving average values, one per timestamp in t. |
| `t`                                                   | *number*[]                                            | :heavy_minus_sign:                                    | Timestamps corresponding to each indicator value.     |