# TranscriptsResponse

List of available earnings call transcripts for a company.

## Example Usage

```typescript
import { TranscriptsResponse } from "@ariesdotcom/finance-dev/models";

let value: TranscriptsResponse = {};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `symbol`                                                                               | *string*                                                                               | :heavy_minus_sign:                                                                     | Ticker symbol of the company.                                                          |
| `transcripts`                                                                          | [models.TranscriptsResponseTranscript](../models/transcripts-response-transcript.md)[] | :heavy_minus_sign:                                                                     | Available earnings call transcripts.                                                   |