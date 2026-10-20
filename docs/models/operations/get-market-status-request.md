# GetMarketStatusRequest

## Example Usage

```typescript
import { GetMarketStatusRequest } from "finance-dev/models/operations";

let value: GetMarketStatusRequest = {};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    | Example                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `exchange`                                                                                                                                     | [models.ExchangeCode](../../models/exchange-code.md)                                                                                           | :heavy_check_mark:                                                                                                                             | exchange code (case-insensitive). Select from the Try it dropdown or use any value from the supported exchange list in the API reference page. | US                                                                                                                                             |