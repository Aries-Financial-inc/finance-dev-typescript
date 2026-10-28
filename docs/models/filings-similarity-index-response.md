# FilingsSimilarityIndexResponse

Response containing the SEC filings similarity index for a company.

## Example Usage

```typescript
import { FilingsSimilarityIndexResponse } from "@ariesdotcom/finance-dev/models";

let value: FilingsSimilarityIndexResponse = {};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `data`                                                                                         | [models.FilingsSimilarityIndexDataWrapper](../models/filings-similarity-index-data-wrapper.md) | :heavy_minus_sign:                                                                             | Similarity index data for a company, identified by CIK and symbol.                             |