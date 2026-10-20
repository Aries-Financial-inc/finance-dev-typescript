# SecFilingsResponse

Response containing SEC filings for a symbol.

## Example Usage

```typescript
import { SecFilingsResponse } from "finance-dev/models";

let value: SecFilingsResponse = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `filings`                                     | [models.SecFiling](../models/sec-filing.md)[] | :heavy_minus_sign:                            | Array of SEC filings                          |