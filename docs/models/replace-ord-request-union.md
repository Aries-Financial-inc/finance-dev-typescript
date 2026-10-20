# ReplaceOrdRequestUnion

Request body for replacing an open order through the core trading API. Use this when the user changes price, quantity, stop price, or time-in-force before the order fully fills.


## Supported Types

### `models.ReplaceOrdRequest1`

```typescript
const value: models.ReplaceOrdRequest1 = {
  accountId: "<id>",
  currency: "USD",
  legs: [
    {
      maturity: new Date("2025-01-17"),
      positionEffect: "OPEN",
      putCall: "CALL",
      ratioQty: "1",
      securityType: "CS",
      side: "BUY",
      strikePrice: "150.00",
      symbol: "AAPL",
    },
  ],
  origClOrdId: "ORDER-123456",
  price: "148.50",
  qty: "20",
  side: "BUY",
  stopPrice: "145.00",
  symbol: "AAPL",
  timeInForce: "DAY",
  tradingAccountId: "TEST-ACCOUNT-001",
  type: "LIMIT",
};
```

### `models.ReplaceOrdRequest2`

```typescript
const value: models.ReplaceOrdRequest2 = {
  currency: "USD",
  legs: [
    {
      maturity: new Date("2025-01-17"),
      positionEffect: "OPEN",
      putCall: "CALL",
      ratioQty: "1",
      securityType: "CS",
      side: "BUY",
      strikePrice: "150.00",
      symbol: "AAPL",
    },
  ],
  origClOrdId: "ORDER-123456",
  price: "148.50",
  qty: "20",
  side: "BUY",
  stopPrice: "145.00",
  symbol: "AAPL",
  timeInForce: "DAY",
  tradingAccountId: "TEST-ACCOUNT-001",
  type: "LIMIT",
};
```

