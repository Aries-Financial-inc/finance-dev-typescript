# LogoSyncResponseData

## Example Usage

```typescript
import { LogoSyncResponseData } from "finance-dev/models";

let value: LogoSyncResponseData = {};
```

## Fields

| Field                                                                         | Type                                                                          | Required                                                                      | Description                                                                   |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `colors`                                                                      | Record<string, *any*>                                                         | :heavy_minus_sign:                                                            | Key-value map; may be empty. Keys vary by record.                             |
| `createdAt`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | Timestamp when the logo record was created                                    |
| `files`                                                                       | [models.LogoSyncResponseFiles](../models/logo-sync-response-files.md)         | :heavy_minus_sign:                                                            | Available logo file variants                                                  |
| `id`                                                                          | *string*                                                                      | :heavy_minus_sign:                                                            | Unique identifier for the logo record                                         |
| `securities`                                                                  | [models.LogoSyncResponseSecurity](../models/logo-sync-response-security.md)[] | :heavy_minus_sign:                                                            | Securities associated with the logo record                                    |
| `updatedAt`                                                                   | *string*                                                                      | :heavy_minus_sign:                                                            | Timestamp when the logo record was last updated                               |