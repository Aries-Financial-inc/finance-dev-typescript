# EarningsCallLiveResponse

Live and recorded earnings call events for the requested range or symbol.

## Example Usage

```typescript
import { EarningsCallLiveResponse } from "finance-dev/models";

let value: EarningsCallLiveResponse = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `event`                              | [models.Event](../models/event.md)[] | :heavy_minus_sign:                   | Earnings call events.                |