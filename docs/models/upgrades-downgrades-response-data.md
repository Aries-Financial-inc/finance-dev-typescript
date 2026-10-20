# UpgradesDowngradesResponseData

## Example Usage

```typescript
import { UpgradesDowngradesResponseData } from "finance-dev/models";

let value: UpgradesDowngradesResponseData = {};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `action`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Type of rating action, such as upgrade, downgrade, initiate or maintain |
| `company`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | Name of the firm that issued the rating change                          |
| `fromGrade`                                                             | *string*                                                                | :heavy_minus_sign:                                                      | Previous rating                                                         |
| `gradeTime`                                                             | *number*                                                                | :heavy_minus_sign:                                                      | Time of the rating change as a Unix timestamp                           |
| `symbol`                                                                | *string*                                                                | :heavy_minus_sign:                                                      | Stock ticker symbol                                                     |
| `toGrade`                                                               | *string*                                                                | :heavy_minus_sign:                                                      | New rating                                                              |