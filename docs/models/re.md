# Re

## Example Usage

```typescript
import { Re } from "@ariesdotcom/finance-dev/models";

let value: Re = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `atTime`                                                      | *string*                                                      | :heavy_minus_sign:                                            | Timestamp of the presentation as provided by the data vendor. |
| `quarter`                                                     | *number*                                                      | :heavy_minus_sign:                                            | Fiscal quarter the presentation relates to.                   |
| `title`                                                       | *string*                                                      | :heavy_minus_sign:                                            | Title of the presentation.                                    |
| `url`                                                         | *string*                                                      | :heavy_minus_sign:                                            | URL to access the presentation.                               |
| `year`                                                        | *number*                                                      | :heavy_minus_sign:                                            | Fiscal year the presentation relates to.                      |