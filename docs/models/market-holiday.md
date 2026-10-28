# MarketHoliday

Market holiday or special trading day.

## Example Usage

```typescript
import { MarketHoliday } from "@ariesdotcom/finance-dev/models";

let value: MarketHoliday = {};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `atDate`                                                                              | [Date](../types/rfcdate.md)                                                           | :heavy_minus_sign:                                                                    | Date of the holiday in YYYY-MM-DD format                                              |
| `eventName`                                                                           | *string*                                                                              | :heavy_minus_sign:                                                                    | Name of the holiday or special market event                                           |
| `tradingHour`                                                                         | *string*                                                                              | :heavy_minus_sign:                                                                    | Trading hours for the day (e.g., 09:30-13:00 for early close, empty for full closure) |