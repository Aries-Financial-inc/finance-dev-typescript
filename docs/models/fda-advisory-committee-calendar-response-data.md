# FdaAdvisoryCommitteeCalendarResponseData

## Example Usage

```typescript
import { FdaAdvisoryCommitteeCalendarResponseData } from "@ariesdotcom/finance-dev/models";

let value: FdaAdvisoryCommitteeCalendarResponseData = {};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `eventDescription`                                           | *string*                                                     | :heavy_minus_sign:                                           | Description of the meeting.                                  |
| `fromDate`                                                   | *string*                                                     | :heavy_minus_sign:                                           | Start time of the event in EST, as returned by the provider. |
| `toDate`                                                     | *string*                                                     | :heavy_minus_sign:                                           | End time of the event in EST, as returned by the provider.   |
| `url`                                                        | *string*                                                     | :heavy_minus_sign:                                           | URL with more details about the meeting.                     |