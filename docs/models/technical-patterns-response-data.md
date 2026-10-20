# TechnicalPatternsResponseData

Pattern recognition payload.

## Example Usage

```typescript
import { TechnicalPatternsResponseData } from "finance-dev/models";

let value: TechnicalPatternsResponseData = {};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `points`                             | [models.Point](../models/point.md)[] | :heavy_minus_sign:                   | List of detected pattern points.     |