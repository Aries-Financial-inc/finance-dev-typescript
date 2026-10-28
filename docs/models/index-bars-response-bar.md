# IndexBarsResponseBar

## Example Usage

```typescript
import { IndexBarsResponseBar } from "@ariesdotcom/finance-dev/models";

let value: IndexBarsResponseBar = {};
```

## Fields

| Field                                     | Type                                      | Required                                  | Description                               |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| `close`                                   | *number*                                  | :heavy_minus_sign:                        | Closing index value for the bar period    |
| `endDate`                                 | *string*                                  | :heavy_minus_sign:                        | Bar end date in MM/DD/YYYY format         |
| `endTime`                                 | *string*                                  | :heavy_minus_sign:                        | Bar end time in HH:MM AM/PM format        |
| `high`                                    | *number*                                  | :heavy_minus_sign:                        | Highest index value during the bar period |
| `low`                                     | *number*                                  | :heavy_minus_sign:                        | Lowest index value during the bar period  |
| `open`                                    | *number*                                  | :heavy_minus_sign:                        | Opening index value for the bar period    |
| `startDate`                               | *string*                                  | :heavy_minus_sign:                        | Bar start date in MM/DD/YYYY format       |
| `startTime`                               | *string*                                  | :heavy_minus_sign:                        | Bar start time in HH:MM AM/PM format      |
| `volume`                                  | *number*                                  | :heavy_minus_sign:                        | Trading volume during the bar period      |