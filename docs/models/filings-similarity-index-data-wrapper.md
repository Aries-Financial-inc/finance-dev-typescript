# FilingsSimilarityIndexDataWrapper

Similarity index data for a company, identified by CIK and symbol.

## Example Usage

```typescript
import { FilingsSimilarityIndexDataWrapper } from "finance-dev/models";

let value: FilingsSimilarityIndexDataWrapper = {};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `cik`                                                                    | *string*                                                                 | :heavy_minus_sign:                                                       | Central Index Key                                                        |
| `similarity`                                                             | [models.FilingSimilarityRecord](../models/filing-similarity-record.md)[] | :heavy_minus_sign:                                                       | Array of filing similarity records with cosine similarity scores         |
| `symbol`                                                                 | *string*                                                                 | :heavy_minus_sign:                                                       | Stock ticker symbol                                                      |