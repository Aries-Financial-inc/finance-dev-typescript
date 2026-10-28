# OptionSnapshotLastTrade

Latest trade when included (`OptionSnapshotLastTradeDTO`).

## Example Usage

```typescript
import { OptionSnapshotLastTrade } from "@ariesdotcom/finance-dev/models";

let value: OptionSnapshotLastTrade = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `conditions`                                                         | *number*[]                                                           | :heavy_minus_sign:                                                   | Trade condition codes, as supplied by the market data provider       |
| `decimalSize`                                                        | *string*                                                             | :heavy_minus_sign:                                                   | Trade size as a decimal string, when provided                        |
| `exchange`                                                           | *number*                                                             | :heavy_minus_sign:                                                   | Numeric exchange identifier supplied by the market data provider.    |
| `price`                                                              | *number*                                                             | :heavy_minus_sign:                                                   | Trade price                                                          |
| `sipTimestamp`                                                       | *number*                                                             | :heavy_minus_sign:                                                   | SIP timestamp of the trade, as supplied by the market data provider  |
| `size`                                                               | *number*                                                             | :heavy_minus_sign:                                                   | Trade size                                                           |
| `timeframe`                                                          | *string*                                                             | :heavy_minus_sign:                                                   | Data timeframe of the trade, as supplied by the market data provider |