# InstitutionalHolding

Single holding in an institutional investor's portfolio or in a security's institutional ownership.

## Example Usage

```typescript
import { InstitutionalHolding } from "@ariesdotcom/finance-dev/models";

let value: InstitutionalHolding = {};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `change`                                                          | *number*                                                          | :heavy_minus_sign:                                                | Change in share count from previous quarter                       |
| `cusip`                                                           | *string*                                                          | :heavy_minus_sign:                                                | CUSIP identifier for the security                                 |
| `name`                                                            | *string*                                                          | :heavy_minus_sign:                                                | Name of the security or company                                   |
| `putCall`                                                         | *string*                                                          | :heavy_minus_sign:                                                | Type of option position (PUT, CALL, or empty for stock positions) |
| `share`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Number of shares held                                             |
| `symbol`                                                          | *string*                                                          | :heavy_minus_sign:                                                | Stock ticker symbol                                               |
| `value`                                                           | *number*                                                          | :heavy_minus_sign:                                                | Market value of the holding in USD                                |