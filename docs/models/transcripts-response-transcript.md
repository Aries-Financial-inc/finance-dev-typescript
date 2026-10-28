# TranscriptsResponseTranscript

## Example Usage

```typescript
import { TranscriptsResponseTranscript } from "@ariesdotcom/finance-dev/models";

let value: TranscriptsResponseTranscript = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `id`                                                           | *string*                                                       | :heavy_minus_sign:                                             | Transcript identifier, used to fetch the full transcript.      |
| `quarter`                                                      | *number*                                                       | :heavy_minus_sign:                                             | Fiscal quarter of the earnings call.                           |
| `time`                                                         | *string*                                                       | :heavy_minus_sign:                                             | Timestamp of the earnings call as provided by the data vendor. |
| `title`                                                        | *string*                                                       | :heavy_minus_sign:                                             | Title of the earnings call transcript.                         |
| `year`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Fiscal year of the earnings call.                              |