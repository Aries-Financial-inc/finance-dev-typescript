# LobbyingResponse

US Senate and House lobbying activity reported for a company, as provided by Finnhub.

## Example Usage

```typescript
import { LobbyingResponse } from "finance-dev/models";

let value: LobbyingResponse = {};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `data`                                                               | [models.LobbyingResponseData](../models/lobbying-response-data.md)[] | :heavy_minus_sign:                                                   | Lobbying records for the symbol.                                     |
| `symbol`                                                             | *string*                                                             | :heavy_minus_sign:                                                   | Company ticker symbol.                                               |