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
      candidateStatus: "C",
      eventId: "<id>",
      frontRunner: true,
      incumbent: true,
      openInterest: 1309471,
      party: "I",
      photo: {
        credit: "Gage Skidmore",
        license: "CC BY-SA 4.0",
        licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
        sourceUrl: "https://commons.wikimedia.org/wiki/File:K_Paxton.jpg",
        url: "https://spherical-opera.name/",
      },
      state: "ACTIVE",
      symbol: "UNR_0822_3.5",
      symbolSubTypes: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
      ],
      tickSize: new Decimal("0.01"),
      timeSpecifier: "2022.08",
      tradable: true,
    },
  ],
  page: 847610,
  perPage: 787626,
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

