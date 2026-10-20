# OptionsActivityResponse

Response containing unusual options activity records.

## Example Usage

```typescript
import { OptionsActivityResponse } from "finance-dev/models";

let value: OptionsActivityResponse = {};
```

## Fields

| Field                                      | Type                                       | Required                                   | Description                                |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| `activities`                               | [models.Activity](../models/activity.md)[] | :heavy_minus_sign:                         | Array of options activity records          |