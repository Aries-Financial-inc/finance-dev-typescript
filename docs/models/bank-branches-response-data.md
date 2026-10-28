# BankBranchesResponseData

## Example Usage

```typescript
import { BankBranchesResponseData } from "@ariesdotcom/finance-dev/models";

let value: BankBranchesResponseData = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `address`                                                | *string*                                                 | :heavy_minus_sign:                                       | Branch address.                                          |
| `branchId`                                               | *string*                                                 | :heavy_minus_sign:                                       | Branch identifier.                                       |
| `date`                                                   | *string*                                                 | :heavy_minus_sign:                                       | Date the branch was opened, as returned by the provider. |
| `state`                                                  | *string*                                                 | :heavy_minus_sign:                                       | Branch state.                                            |
| `zipCode`                                                | *string*                                                 | :heavy_minus_sign:                                       | Branch zip code.                                         |