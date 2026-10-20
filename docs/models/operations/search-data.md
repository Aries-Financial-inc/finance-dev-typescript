# SearchData


## Supported Types

### `models.PredMdBaseEventSearchResult`

```typescript
const value: models.PredMdBaseEventSearchResult = {
  found: 681760,
  hits: [],
  page: 882274,
  perPage: 112466,
  type: "base-events",
};
```

### `models.PredMdContractSearchResult`

```typescript
const value: models.PredMdContractSearchResult = {
  found: 160518,
  hits: [
    {
      baseEventId: "<id>",
      eventId: "<id>",
      state: "ACTIVE",
      symbol: "UNR_0822_3.5",
      symbolSubTypes: [],
      tickSize: new Decimal("0.01"),
      timeSpecifier: "2022.08",
      tradable: true,
    },
  ],
  page: 418043,
  perPage: 345343,
  type: "contracts",
};
```

### `models.PredMdEventSearchResult`

```typescript
const value: models.PredMdEventSearchResult = {
  found: 835913,
  hits: [],
  page: 889780,
  perPage: 725777,
  type: "events",
};
```

