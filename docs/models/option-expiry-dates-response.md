# OptionExpiryDatesResponse

Response containing the option expiration dates for an underlying symbol.

## Example Usage

```typescript
import { OptionExpiryDatesResponse } from "finance-dev/models";

let value: OptionExpiryDatesResponse = {};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `expiryDates`                                 | [Date](../types/rfcdate.md)[]                 | :heavy_minus_sign:                            | List of expiration dates in YYYY-MM-DD format |
| `symbol`                                      | *string*                                      | :heavy_minus_sign:                            | Underlying symbol                             |