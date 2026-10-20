# GetRevenueBreakdownRequest

## Example Usage

```typescript
import { GetRevenueBreakdownRequest } from "finance-dev/models/operations";

let value: GetRevenueBreakdownRequest = {
  symbol: "AAPL",
  cik: "320193",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `symbol`                                                                       | *string*                                                                       | :heavy_minus_sign:                                                             | Stock ticker symbol to research, such as AAPL. Required when `cik` is omitted. | AAPL                                                                           |
| `cik`                                                                          | *string*                                                                       | :heavy_minus_sign:                                                             | SEC CIK. Optional when `symbol` is provided.                                   | 320193                                                                         |