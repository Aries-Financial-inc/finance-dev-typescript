# Covid19UsCasesResponseData

## Example Usage

```typescript
import { Covid19UsCasesResponseData } from "finance-dev/models";

let value: Covid19UsCasesResponseData = {};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `case`                                                         | *number*                                                       | :heavy_minus_sign:                                             | Number of confirmed cases.                                     |
| `death`                                                        | *number*                                                       | :heavy_minus_sign:                                             | Number of confirmed deaths.                                    |
| `state`                                                        | *string*                                                       | :heavy_minus_sign:                                             | US state name.                                                 |
| `updated`                                                      | *string*                                                       | :heavy_minus_sign:                                             | Time the record was last updated, as returned by the provider. |