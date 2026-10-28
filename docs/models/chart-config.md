# ChartConfig

Capabilities returned for the charting API. Use this once at startup to configure supported resolutions and chart UI options.

## Example Usage

```typescript
import { ChartConfig } from "@ariesdotcom/finance-dev/models";

let value: ChartConfig = {
  dailyMultipliers: [
    "1",
  ],
  hasDaily: true,
  hasIntraday: true,
  hasWeeklyAndMonthly: true,
  intradayMultipliers: [
    "1",
    "5",
    "15",
    "30",
    "60",
    "240",
  ],
  monthlyMultipliers: [
    "1",
  ],
  supportedResolutions: [
    "1T",
    "5T",
    "10T",
    "25T",
    "50T",
    "100T",
    "250T",
    "500T",
    "1000T",
    "1",
    "3",
    "5",
    "15",
    "30",
    "45",
    "60",
    "120",
    "180",
    "240",
    "1D",
    "1W",
    "1M",
    "3M",
    "6M",
    "12M",
  ],
  supportsGroupRequest: false,
  supportsMarks: false,
  supportsSearch: true,
  supportsTime: false,
  supportsTimescaleMarks: false,
  weeklyMultipliers: [
    "1",
  ],
};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           | Example                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `dailyMultipliers`                                                                                                                                                    | *string*[]                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | Supported daily multipliers                                                                                                                                           | [<br/>"1"<br/>]                                                                                                                                                       |
| `hasDaily`                                                                                                                                                            | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether daily chart data is available                                                                                                                                 | true                                                                                                                                                                  |
| `hasIntraday`                                                                                                                                                         | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether intraday chart data is available                                                                                                                              | true                                                                                                                                                                  |
| `hasWeeklyAndMonthly`                                                                                                                                                 | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether weekly and monthly chart data is available                                                                                                                    | true                                                                                                                                                                  |
| `intradayMultipliers`                                                                                                                                                 | *string*[]                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | Supported intraday multipliers used with minute-based chart resolutions                                                                                               | [<br/>"1",<br/>"5",<br/>"15",<br/>"30",<br/>"60",<br/>"240"<br/>]                                                                                                     |
| `monthlyMultipliers`                                                                                                                                                  | *string*[]                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | Supported monthly multipliers                                                                                                                                         | [<br/>"1"<br/>]                                                                                                                                                       |
| `supportedResolutions`                                                                                                                                                | *string*[]                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | List of supported chart resolutions, including tick-based intervals with a `T` suffix, minute-based intervals, and daily, weekly, and monthly resolutions.            | [<br/>"1T",<br/>"5T",<br/>"10T",<br/>"25T",<br/>"50T",<br/>"100T",<br/>"250T",<br/>"500T",<br/>"1000T",<br/>"1",<br/>"3",<br/>"5",<br/>"15",<br/>"30",<br/>"45",<br/>"60",<br/>"120",<br/>"180",<br/>"240",<br/>"1D",<br/>"1W",<br/>"1M",<br/>"3M",<br/>"6M",<br/>"12M"<br/>] |
| `supportsGroupRequest`                                                                                                                                                | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether the API supports group requests                                                                                                                               | false                                                                                                                                                                 |
| `supportsMarks`                                                                                                                                                       | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether the API supports marks on charts                                                                                                                              | false                                                                                                                                                                 |
| `supportsSearch`                                                                                                                                                      | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether the API supports symbol search                                                                                                                                | true                                                                                                                                                                  |
| `supportsTime`                                                                                                                                                        | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether the API supports time endpoint                                                                                                                                | false                                                                                                                                                                 |
| `supportsTimescaleMarks`                                                                                                                                              | *boolean*                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                    | Whether the API supports timescale marks                                                                                                                              | false                                                                                                                                                                 |
| `weeklyMultipliers`                                                                                                                                                   | *string*[]                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                    | Supported weekly multipliers                                                                                                                                          | [<br/>"1"<br/>]                                                                                                                                                       |