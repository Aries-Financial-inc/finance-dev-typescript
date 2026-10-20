# PlaceOrdRequestUnion

Request body for placing a live order through the core trading API. Use Preview Order first when available, then submit this only after the user confirms the trade.


## Supported Types

### `models.PlaceOrdRequest1`

```typescript
const value: models.PlaceOrdRequest1 = {
  accountId: "<id>",
  clientId: "CLIENT-001",
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
  price: "150.00",
  qty: "10",
  side: "BUY",
  stopPrice: "145.00",
  symbol: "AAPL",
  timeInForce: "DAY",
  tradingAccountId: "TEST-ACCOUNT-001",
  type: "LIMIT",
};
```

### `models.PlaceOrdRequest2`

```typescript
const value: models.PlaceOrdRequest2 = {
  clientId: "CLIENT-001",
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
  price: "150.00",
  qty: "10",
  side: "BUY",
  stopPrice: "145.00",
  symbol: "AAPL",
  timeInForce: "DAY",
  tradingAccountId: "TEST-ACCOUNT-001",
  type: "LIMIT",
};
```

