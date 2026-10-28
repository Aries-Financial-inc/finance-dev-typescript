# GetTranscriptRequest

## Example Usage

```typescript
import { GetTranscriptRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetTranscriptRequest = {
  id: "<id>",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | Unique identifier for an earnings-call transcript. Obtain it from `/v1/stock/transcripts/list` for the symbol you want. |