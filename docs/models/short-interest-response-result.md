# ShortInterestResponseResult

## Example Usage

```typescript
import { ShortInterestResponseResult } from "finance-dev/models";

let value: ShortInterestResponseResult = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `avgDailyVolume`                                                                | *number*                                                                        | :heavy_minus_sign:                                                              | Average daily trading volume in shares used for the days-to-cover calculation   |
| `daysToCover`                                                                   | *number*                                                                        | :heavy_minus_sign:                                                              | Number of days of average volume needed to cover the short interest             |
| `settlementDate`                                                                | *string*                                                                        | :heavy_minus_sign:                                                              | Settlement date of the short interest report (YYYY-MM-DD)                       |
| `shortInterest`                                                                 | *number*                                                                        | :heavy_minus_sign:                                                              | Total number of shares sold short and not yet covered as of the settlement date |
| `ticker`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Stock ticker symbol                                                             |