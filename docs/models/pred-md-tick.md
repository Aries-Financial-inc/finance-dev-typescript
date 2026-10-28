# PredMdTick

## Example Usage

```typescript
import { PredMdTick } from "@ariesdotcom/finance-dev/models";
import { Decimal } from "@ariesdotcom/finance-dev/types";

let value: PredMdTick = {
  noPrice: new Decimal("0.46"),
  quantity: 10,
  timestamp: new Date("2026-04-18T13:45:01.234Z"),
  yesPrice: new Decimal("0.54"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `noPrice`                                                                                     | *Decimal*                                                                                     | :heavy_check_mark:                                                                            | Exact decimal, serialized as a string so no client parses it through a float.                 | 0.46                                                                                          |
| `quantity`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           | 10                                                                                            |
| `timestamp`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           | 2026-04-18T13:45:01.234Z                                                                      |
| `yesPrice`                                                                                    | *Decimal*                                                                                     | :heavy_check_mark:                                                                            | Exact decimal, serialized as a string so no client parses it through a float.                 | 0.54                                                                                          |