# Unauthorized

401 responses may use a flat `ErrorResponse` shape or a nested `error` object. Inspect `error`: if it is a string, use the flat shape; if it is an object, use the structured shape.


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

