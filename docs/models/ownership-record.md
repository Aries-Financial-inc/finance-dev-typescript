# OwnershipRecord

Ownership record of an institutional investor or fund in a security.

## Example Usage

```typescript
import { OwnershipRecord } from "@ariesdotcom/finance-dev/models";

let value: OwnershipRecord = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `change`                                           | *number*                                           | :heavy_minus_sign:                                 | Change in share count from previous filing         |
| `filingDate`                                       | *string*                                           | :heavy_minus_sign:                                 | Date of the regulatory filing in YYYY-MM-DD format |
| `name`                                             | *string*                                           | :heavy_minus_sign:                                 | Name of the institutional investor or fund         |
| `percentOfShares`                                  | *number*                                           | :heavy_minus_sign:                                 | Percentage of total outstanding shares held        |
| `share`                                            | *number*                                           | :heavy_minus_sign:                                 | Number of shares held                              |
| `source`                                           | *string*                                           | :heavy_minus_sign:                                 | Source of the ownership data (e.g., 13F, 13G)      |