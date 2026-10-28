# StockLastQuoteResponseResults

Last NBBO quote object

## Example Usage

```typescript
import { StockLastQuoteResponseResults } from "@ariesdotcom/finance-dev/models";

let value: StockLastQuoteResponseResults = {};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `askExchange`          | *number*               | :heavy_minus_sign:     | Ask exchange ID        |
| `askPrice`             | *number*               | :heavy_minus_sign:     | Ask price              |
| `askSize`              | *number*               | :heavy_minus_sign:     | Ask size               |
| `bidExchange`          | *number*               | :heavy_minus_sign:     | Bid exchange ID        |
| `bidPrice`             | *number*               | :heavy_minus_sign:     | Bid price              |
| `bidSize`              | *number*               | :heavy_minus_sign:     | Bid size               |
| `conditions`           | *number*[]             | :heavy_minus_sign:     | Quote conditions       |
| `indicators`           | *number*[]             | :heavy_minus_sign:     | Quote indicators       |
| `participantTimestamp` | *number*               | :heavy_minus_sign:     | Participant timestamp  |
| `sequenceNumber`       | *number*               | :heavy_minus_sign:     | Sequence number        |
| `sipTimestamp`         | *number*               | :heavy_minus_sign:     | SIP timestamp          |
| `tape`                 | *number*               | :heavy_minus_sign:     | Tape                   |
| `ticker`               | *string*               | :heavy_minus_sign:     | Ticker symbol          |
| `trfTimestamp`         | *number*               | :heavy_minus_sign:     | TRF timestamp          |