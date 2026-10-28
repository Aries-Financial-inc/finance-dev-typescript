# PredMdCategory

One node of the category tree.

## Example Usage

```typescript
import { PredMdCategory } from "@ariesdotcom/finance-dev/models";

let value: PredMdCategory = {
  children: [
    {
      name: "United States House",
      path: "Elections > United States House",
    },
  ],
  name: "United States House",
  path: "Elections > United States House",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `children`                                                                                                                   | [models.PredMdCategory](../models/pred-md-category.md)[]                                                                     | :heavy_minus_sign:                                                                                                           | The categories one level down, ordered by name. Absent on a leaf.                                                            |                                                                                                                              |
| `name`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | This level's name, for display.                                                                                              | United States House                                                                                                          |
| `path`                                                                                                                       | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | Every level from the top down to this one, joined by " > ". It identifies the category and is what search takes as category. | Elections > United States House                                                                                              |