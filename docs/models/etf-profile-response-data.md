# EtfProfileResponseData

ETF profile payload.

## Example Usage

```typescript
import { EtfProfileResponseData } from "@ariesdotcom/finance-dev/models";

let value: EtfProfileResponseData = {};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `profile`                                          | [models.Profile](../models/profile.md)             | :heavy_minus_sign:                                 | Descriptive and fundamental attributes of the ETF. |
| `symbol`                                           | *string*                                           | :heavy_minus_sign:                                 | ETF ticker symbol.                                 |