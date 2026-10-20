# UsptoPatentsResponseData

## Example Usage

```typescript
import { UsptoPatentsResponseData } from "finance-dev/models";

let value: UsptoPatentsResponseData = {};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `applicationNumber`                                         | *string*                                                    | :heavy_minus_sign:                                          | Patent application number.                                  |
| `companyFilingName`                                         | *string*[]                                                  | :heavy_minus_sign:                                          | Names of the companies listed on the patent.                |
| `description`                                               | *string*                                                    | :heavy_minus_sign:                                          | Description of the patent.                                  |
| `filingDate`                                                | *string*                                                    | :heavy_minus_sign:                                          | Date the patent was filed, as returned by the provider.     |
| `filingStatus`                                              | *string*                                                    | :heavy_minus_sign:                                          | Filing status of the patent.                                |
| `patentNumber`                                              | *string*                                                    | :heavy_minus_sign:                                          | Patent number.                                              |
| `patentType`                                                | *string*                                                    | :heavy_minus_sign:                                          | Type of patent.                                             |
| `publicationDate`                                           | *string*                                                    | :heavy_minus_sign:                                          | Date the patent was published, as returned by the provider. |
| `url`                                                       | *string*                                                    | :heavy_minus_sign:                                          | URL of the original patent document.                        |