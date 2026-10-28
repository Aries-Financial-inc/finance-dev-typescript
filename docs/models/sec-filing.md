# SecFiling

A single SEC filing with its accession number, form type, dates and document URLs.

## Example Usage

```typescript
import { SecFiling } from "@ariesdotcom/finance-dev/models";

let value: SecFiling = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `acceptedDate`                                       | *string*                                             | :heavy_minus_sign:                                   | Date and time when the SEC accepted the filing       |
| `accessNumber`                                       | *string*                                             | :heavy_minus_sign:                                   | SEC accession number uniquely identifying the filing |
| `cik`                                                | *string*                                             | :heavy_minus_sign:                                   | Central Index Key assigned by the SEC                |
| `filedDate`                                          | *string*                                             | :heavy_minus_sign:                                   | Date when the filing was submitted to the SEC        |
| `filingUrl`                                          | *string*                                             | :heavy_minus_sign:                                   | URL to the complete filing on SEC EDGAR              |
| `form`                                               | *string*                                             | :heavy_minus_sign:                                   | Type of SEC form (e.g., 10-K, 10-Q, 8-K)             |
| `reportUrl`                                          | *string*                                             | :heavy_minus_sign:                                   | URL to the formatted report document                 |
| `symbol`                                             | *string*                                             | :heavy_minus_sign:                                   | Stock ticker symbol                                  |