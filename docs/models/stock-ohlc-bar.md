# StockOhlcBar

OHLCV bar for stock price history. Use values at each bar to render candles or historical price charts.

## Example Usage

```typescript
import { StockOhlcBar } from "finance-dev/models";

let value: StockOhlcBar = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `tickerSymbol`                                                                        | *string*                                                                              | :heavy_minus_sign:                                                                    | Ticker symbol (optional, e.g. for grouped/prev)                                       |
| `c`                                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | Close price for the bar interval. Use it as the final price in a candle.              |
| `h`                                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | Highest traded price during the bar interval. Use it for the candle's upper wick.     |
| `l`                                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | Lowest traded price during the bar interval. Use it for the candle's lower wick.      |
| `n`                                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | Number of trades included in the bar. Use it as an activity indicator when available. |
| `o`                                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | Opening price for the bar interval. Use it as the first price in a candle.            |
| `t`                                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | Bar timestamp in Unix milliseconds. Use it as the x-axis time value.                  |
| `v`                                                                                   | *number*                                                                              | :heavy_minus_sign:                                                                    | Shares or contracts traded during the bar interval. Use it for volume charts.         |
| `vw`                                                                                  | *number*                                                                              | :heavy_minus_sign:                                                                    | Volume weighted average price                                                         |