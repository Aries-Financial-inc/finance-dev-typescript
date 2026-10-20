# Event

## Example Usage

```typescript
import { Event } from "finance-dev/models";

let value: Event = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `event`                                                        | *string*                                                       | :heavy_minus_sign:                                             | Title of the earnings call event.                              |
| `liveAudio`                                                    | *string*                                                       | :heavy_minus_sign:                                             | URL of the live audio stream for the call.                     |
| `quarter`                                                      | *number*                                                       | :heavy_minus_sign:                                             | Fiscal quarter of the earnings call.                           |
| `recording`                                                    | *string*                                                       | :heavy_minus_sign:                                             | URL of the recorded audio of the call.                         |
| `symbol`                                                       | *string*                                                       | :heavy_minus_sign:                                             | Ticker symbol of the company.                                  |
| `time`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Timestamp of the earnings call as provided by the data vendor. |
| `year`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Fiscal year of the earnings call.                              |