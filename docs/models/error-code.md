# ErrorCode

A single structured error entry identifying a machine-readable code, a human-readable description, and optionally the field that caused it.

## Example Usage

```typescript
import { ErrorCode } from "@ariesdotcom/finance-dev/models";

let value: ErrorCode = {
  code: "INVALID_PASSWORD",
  description: "Password must be between 8 and 64 characters",
  field: "password",
};
```

## Fields

| Field                                        | Type                                         | Required                                     | Description                                  | Example                                      |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| `code`                                       | *string*                                     | :heavy_minus_sign:                           | Machine-readable error code                  | INVALID_PASSWORD                             |
| `description`                                | *string*                                     | :heavy_minus_sign:                           | Human-readable description of the error      | Password must be between 8 and 64 characters |
| `field`                                      | *string*                                     | :heavy_minus_sign:                           | Field name that caused the error             | password                                     |