# OwnershipDataResponse

Response containing institutional ownership records.

## Example Usage

```typescript
import { OwnershipDataResponse } from "finance-dev/models";

let value: OwnershipDataResponse = {};
```

## Fields

| Field                                                     | Type                                                      | Required                                                  | Description                                               |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| `data`                                                    | [models.OwnershipRecord](../models/ownership-record.md)[] | :heavy_minus_sign:                                        | List of institutional ownership records                   |