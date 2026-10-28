# GetBankBranchesRequest

## Example Usage

```typescript
import { GetBankBranchesRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetBankBranchesRequest = {
  symbol: "AAPL",
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 | Example                                                                                                                     |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                                    | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Stock ticker to query. Send the plain uppercase symbol exactly as you'd type it on a brokerage screen, e.g. `AAPL`, `MSFT`. | AAPL                                                                                                                        |