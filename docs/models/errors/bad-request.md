# BadRequest

400 responses commonly use a nested `error` object (`type`, `code`, `message`, optional `details`). Some services still return flat `ErrorResponse` (`error` string, optional `codes`).


## Supported Types

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

