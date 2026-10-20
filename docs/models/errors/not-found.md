# NotFound

404 responses may use a flat or nested error shape.


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

