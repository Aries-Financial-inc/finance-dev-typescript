# CompanyExecutive

Company executive with position and compensation details.

## Example Usage

```typescript
import { CompanyExecutive } from "@ariesdotcom/finance-dev/models";

let value: CompanyExecutive = {};
```

## Fields

| Field                          | Type                           | Required                       | Description                    |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `age`                          | *number*                       | :heavy_minus_sign:             | Executive's current age        |
| `compensation`                 | *number*                       | :heavy_minus_sign:             | Executive compensation amount  |
| `currency`                     | *string*                       | :heavy_minus_sign:             | Currency code for compensation |
| `name`                         | *string*                       | :heavy_minus_sign:             | Executive's full name          |
| `position`                     | *string*                       | :heavy_minus_sign:             | Executive position/title       |
| `sex`                          | *string*                       | :heavy_minus_sign:             | Executive's sex                |
| `since`                        | *string*                       | :heavy_minus_sign:             | Year when the executive joined |