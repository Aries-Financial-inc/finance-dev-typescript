# UpdateWatchlistRequestUnion

Request body for partially updating a watchlist. Include at least one of `name`, `add_symbols`, or `remove_symbols`.


## Supported Types

### `models.UpdateWatchlistRequest1`

```typescript
const value: models.UpdateWatchlistRequest1 = {
  addSymbols: [
    "TSLA",
  ],
  name: "<value>",
  removeSymbols: [
    "MSFT",
  ],
};
```

### `models.UpdateWatchlistRequest2`

```typescript
const value: models.UpdateWatchlistRequest2 = {
  addSymbols: [
    "TSLA",
  ],
  removeSymbols: [
    "MSFT",
  ],
};
```

### `models.UpdateWatchlistRequest3`

```typescript
const value: models.UpdateWatchlistRequest3 = {
  removeSymbols: [
    "MSFT",
  ],
  addSymbols: [
    "TSLA",
  ],
};
```

