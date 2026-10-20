# StockScreenerRequestUnion

Request body for POST /v1/stock/screener. At least one of clauses or groups must be non-empty.


## Supported Types

### `models.StockScreenerRequest1`

```typescript
const value: models.StockScreenerRequest1 = {
  clauses: [],
  operator: "NOT",
};
```

### `models.StockScreenerRequest2`

```typescript
const value: models.StockScreenerRequest2 = {
  groups: [],
  operator: "NOT",
};
```

