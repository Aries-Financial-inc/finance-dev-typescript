# CancelOrdRequestUnion

Request body for canceling an open order through the core trading API. Use this when the user wants to stop an order that has not fully filled.


## Supported Types

### `models.CancelOrdRequest1`

```typescript
const value: models.CancelOrdRequest1 = {
  accountId: "<id>",
  maturity: new Date("2025-01-17"),
  origClOrdId: "ORDER-123456",
  putCall: "CALL",
  securityType: "CS",
  side: "BUY",
  strikePrice: "150.00",
  symbol: "AAPL",
  tradingAccountId: "TEST-ACCOUNT-001",
};
```

### `models.CancelOrdRequest2`

```typescript
const value: models.CancelOrdRequest2 = {
  maturity: new Date("2025-01-17"),
  origClOrdId: "ORDER-123456",
  putCall: "CALL",
  securityType: "CS",
  side: "BUY",
  strikePrice: "150.00",
  symbol: "AAPL",
  tradingAccountId: "TEST-ACCOUNT-001",
};
```

