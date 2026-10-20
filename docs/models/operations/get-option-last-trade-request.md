# GetOptionLastTradeRequest

## Example Usage

```typescript
import { GetOptionLastTradeRequest } from "finance-dev/models/operations";

let value: GetOptionLastTradeRequest = {
  ticker: "O:AAPL230120C00150000",
};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 | Example                                                                                                     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `ticker`                                                                                                    | *string*                                                                                                    | :heavy_check_mark:                                                                                          | Options contract ticker symbol. Enter the exact option symbol returned by option search or chain endpoints. | O:AAPL230120C00150000                                                                                       |