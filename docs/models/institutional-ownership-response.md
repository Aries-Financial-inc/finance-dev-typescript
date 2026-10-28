# InstitutionalOwnershipResponse

Response containing institutional ownership records for a security.

## Example Usage

```typescript
import { InstitutionalOwnershipResponse } from "@ariesdotcom/finance-dev/models";

let value: InstitutionalOwnershipResponse = {};
```

## Fields

| Field                                                               | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `data`                                                              | [models.InstitutionalHolding](../models/institutional-holding.md)[] | :heavy_minus_sign:                                                  | List of institutional ownership records for a security              |