# OptionSnapshotGreeks

Greeks when available (`OptionSnapshotGreeksDTO`).

## Example Usage

```typescript
import { OptionSnapshotGreeks } from "@ariesdotcom/finance-dev/models";

let value: OptionSnapshotGreeks = {};
```

## Fields

| Field                 | Type                  | Required              | Description           |
| --------------------- | --------------------- | --------------------- | --------------------- |
| `delta`               | *number*              | :heavy_minus_sign:    | Delta of the contract |
| `gamma`               | *number*              | :heavy_minus_sign:    | Gamma of the contract |
| `theta`               | *number*              | :heavy_minus_sign:    | Theta of the contract |
| `vega`                | *number*              | :heavy_minus_sign:    | Vega of the contract  |