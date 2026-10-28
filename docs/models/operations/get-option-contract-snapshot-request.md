# GetOptionContractSnapshotRequest

## Example Usage

```typescript
import { GetOptionContractSnapshotRequest } from "@ariesdotcom/finance-dev/models/operations";

let value: GetOptionContractSnapshotRequest = {
  underlyingAsset: "AAPL",
  optionContract: "O:AAPL260410C00110000",
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 | Example                                                                     |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `underlyingAsset`                                                           | *string*                                                                    | :heavy_check_mark:                                                          | Underlying equity symbol (for example AAPL).                                | AAPL                                                                        |
| `optionContract`                                                            | *string*                                                                    | :heavy_check_mark:                                                          | OCC-format options contract identifier (for example O:AAPL240119C00190000). | O:AAPL260410C00110000                                                       |