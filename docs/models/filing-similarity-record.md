# FilingSimilarityRecord

Cosine similarity scores between a filing and the prior comparable filing, by 10-K section.

## Example Usage

```typescript
import { FilingSimilarityRecord } from "finance-dev/models";

let value: FilingSimilarityRecord = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `acceptedDate`                                             | *string*                                                   | :heavy_minus_sign:                                         | Date when the SEC accepted the filing                      |
| `accessNumber`                                             | *string*                                                   | :heavy_minus_sign:                                         | SEC accession number                                       |
| `cik`                                                      | *string*                                                   | :heavy_minus_sign:                                         | Central Index Key                                          |
| `filedDate`                                                | *string*                                                   | :heavy_minus_sign:                                         | Date when filed with SEC                                   |
| `filingUrl`                                                | *string*                                                   | :heavy_minus_sign:                                         | URL to the complete filing                                 |
| `form`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Type of SEC form                                           |
| `item1`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Cosine similarity score for Item 1 (Business) section      |
| `item1a`                                                   | *number*                                                   | :heavy_minus_sign:                                         | Cosine similarity score for Item 1A (Risk Factors) section |
| `item2`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Cosine similarity score for Item 2 (Properties) section    |
| `item7`                                                    | *number*                                                   | :heavy_minus_sign:                                         | Cosine similarity score for Item 7 (MD&A) section          |
| `item7a`                                                   | *number*                                                   | :heavy_minus_sign:                                         | Cosine similarity score for Item 7A (Market Risk) section  |
| `reportUrl`                                                | *string*                                                   | :heavy_minus_sign:                                         | URL to the formatted report                                |