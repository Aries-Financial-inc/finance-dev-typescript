# MergersAndAcquisitionsResponse

Response containing mergers and acquisitions calendar events.

## Example Usage

```typescript
import { MergersAndAcquisitionsResponse } from "finance-dev/models";

let value: MergersAndAcquisitionsResponse = {};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `mergersAcquisitions`                                           | [models.MergersAcquisition](../models/mergers-acquisition.md)[] | :heavy_minus_sign:                                              | Array of merger and acquisition events                          |