# ListCategoriesResponse

Standard success envelope used by all success responses. `data` is endpoint-specific.

## Example Usage

```typescript
import { ListCategoriesResponse } from "@ariesdotcom/finance-dev/models/operations";

let value: ListCategoriesResponse = {
  data: {
    categories: [],
  },
  success: true,
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `data`                                                                           | [operations.ListCategoriesData](../../models/operations/list-categories-data.md) | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |
| `success`                                                                        | *boolean*                                                                        | :heavy_check_mark:                                                               | N/A                                                                              | true                                                                             |