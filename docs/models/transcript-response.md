# TranscriptResponse

Full earnings call transcript with participants and speech segments.

## Example Usage

```typescript
import { TranscriptResponse } from "finance-dev/models";

let value: TranscriptResponse = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `audio`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | URL of the earnings call audio recording.                                            |
| `id`                                                                                 | *string*                                                                             | :heavy_minus_sign:                                                                   | Transcript identifier.                                                               |
| `participant`                                                                        | [models.Participant](../models/participant.md)[]                                     | :heavy_minus_sign:                                                                   | Participants in the earnings call.                                                   |
| `quarter`                                                                            | *number*                                                                             | :heavy_minus_sign:                                                                   | Fiscal quarter of the earnings call.                                                 |
| `symbol`                                                                             | *string*                                                                             | :heavy_minus_sign:                                                                   | Ticker symbol of the company.                                                        |
| `time`                                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | Timestamp of the earnings call as provided by the data vendor.                       |
| `title`                                                                              | *string*                                                                             | :heavy_minus_sign:                                                                   | Title of the earnings call transcript.                                               |
| `transcript`                                                                         | [models.TranscriptResponseTranscript](../models/transcript-response-transcript.md)[] | :heavy_minus_sign:                                                                   | Speech segments of the call in order.                                                |
| `year`                                                                               | *number*                                                                             | :heavy_minus_sign:                                                                   | Fiscal year of the earnings call.                                                    |