# OrderHistoryBadRequest

Bad request: missing or invalid `from`/`to`, range over 90 days, or invalid `order_by`, returned as a flat `ErrorResponse` (`error` string). Account-ID path validation failures return the nested error envelope.


## Supported Types

### `errors.ErrorResponse`

```typescript
const value: errors.ErrorResponse = {
  codes: [
    {
      code: "INVALID_PASSWORD",
      description: "Password must be between 8 and 64 characters",
      field: "password",
    },
  ],
  error: "string",
};
```

### `errors.AuthenticationErrorEnvelope`

```typescript
const value: errors.AuthenticationErrorEnvelope = {
  error: {
    code: "INVALID_TOKEN",
    message: "string",
    type: "AUTHENTICATION",
  },
};
```

