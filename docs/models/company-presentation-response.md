# CompanyPresentationResponse

Company presentations and slide decks for a symbol.

## Example Usage

```typescript
import { CompanyPresentationResponse } from "finance-dev/models";

let value: CompanyPresentationResponse = {};
```

## Fields

| Field                            | Type                             | Required                         | Description                      |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `res`                            | [models.Re](../models/re.md)[]   | :heavy_minus_sign:               | Available company presentations. |
| `symbol`                         | *string*                         | :heavy_minus_sign:               | Ticker symbol of the company.    |