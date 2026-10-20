# DividendsResponse

Paginated response containing dividend events.

## Example Usage

```typescript
import { DividendsResponse } from "finance-dev/models";

let value: DividendsResponse = {};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `nextUrl`                                                                       | *string*                                                                        | :heavy_minus_sign:                                                              | Opaque pagination URL for the next page of results when more data is available. |
| `requestId`                                                                     | *string*                                                                        | :heavy_minus_sign:                                                              | Provider request identifier for tracing and support.                            |
| `results`                                                                       | [models.DividendItem](../models/dividend-item.md)[]                             | :heavy_minus_sign:                                                              | Array of dividend payment events.                                               |
| `status`                                                                        | *string*                                                                        | :heavy_minus_sign:                                                              | Provider response status.                                                       |