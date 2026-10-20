# ConferenceCallsResponse

Response containing conference call calendar events.

## Example Usage

```typescript
import { ConferenceCallsResponse } from "finance-dev/models";

let value: ConferenceCallsResponse = {};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `conferenceCalls`                                       | [models.ConferenceCall](../models/conference-call.md)[] | :heavy_minus_sign:                                      | Array of conference call events                         |