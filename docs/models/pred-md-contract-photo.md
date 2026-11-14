# PredMdContractPhoto

The candidate's portrait, for an election contract that has one. `null` for every other contract.

## Example Usage

```typescript
import { PredMdContractPhoto } from "@ariesdotcom/finance-dev/models";

let value: PredMdContractPhoto = {
  credit: "Gage Skidmore",
  license: "CC BY-SA 4.0",
  licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
  sourceUrl: "https://commons.wikimedia.org/wiki/File:K_Paxton.jpg",
  url: "https://clean-exterior.info",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `credit`                                             | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | Gage Skidmore                                        |
| `license`                                            | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | CC BY-SA 4.0                                         |
| `licenseUrl`                                         | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | https://creativecommons.org/licenses/by-sa/4.0       |
| `sourceUrl`                                          | *string*                                             | :heavy_check_mark:                                   | N/A                                                  | https://commons.wikimedia.org/wiki/File:K_Paxton.jpg |
| `url`                                                | *string*                                             | :heavy_check_mark:                                   | 256×256 webp.                                        |                                                      |