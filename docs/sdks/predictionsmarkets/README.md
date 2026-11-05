# PredictionsMarkets

## Overview

### Available Operations

* [search](#search) - Search contracts, events or base events

## search

Full-text search over one index of event contracts. Filters always apply to contracts, so with type=events or type=base-events an event or base event is found through its matching contracts: one with none (for example, only DELETED contracts under the default state) is not returned. Contracts under the venue's Conditional category are never returned. The index trails the catalogue by seconds. sortBy picks the order. With `none`, the default, a q match comes first, then symbol ascending, at every level. With `openInterest`, results are ordered by open interest, as of the venue's last daily prices file, each type by its own: type=contracts by the contract's, type=events by the event's total and type=base-events by the base event's total, then each hit's contracts by their own, ties broken by symbol. With q, relevance comes first and open interest breaks ties. Anything the file did not name comes last.

### Example Usage: base-events

<!-- UsageSnippet language="typescript" operationID="search" method="get" path="/v1/predictions/search" example="base-events" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictionsMarkets.search({
    q: "unemployment june",
    state: "ACTIVE",
    baseEventId: "UNR",
    eventId: "UNR_0822",
    category: "Elections > United States House",
    page: 1,
    perPage: 20,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsMarketsSearch } from "@ariesdotcom/finance-dev/funcs/predictions-markets-search.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsMarketsSearch(financeDev, {
    q: "unemployment june",
    state: "ACTIVE",
    baseEventId: "UNR",
    eventId: "UNR_0822",
    category: "Elections > United States House",
    page: 1,
    perPage: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("predictionsMarketsSearch failed:", res.error);
  }
}

run();
```
### Example Usage: contracts

<!-- UsageSnippet language="typescript" operationID="search" method="get" path="/v1/predictions/search" example="contracts" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictionsMarkets.search({
    q: "unemployment june",
    state: "ACTIVE",
    baseEventId: "UNR",
    eventId: "UNR_0822",
    category: "Elections > United States House",
    page: 1,
    perPage: 20,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsMarketsSearch } from "@ariesdotcom/finance-dev/funcs/predictions-markets-search.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsMarketsSearch(financeDev, {
    q: "unemployment june",
    state: "ACTIVE",
    baseEventId: "UNR",
    eventId: "UNR_0822",
    category: "Elections > United States House",
    page: 1,
    perPage: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("predictionsMarketsSearch failed:", res.error);
  }
}

run();
```
### Example Usage: events

<!-- UsageSnippet language="typescript" operationID="search" method="get" path="/v1/predictions/search" example="events" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictionsMarkets.search({
    q: "unemployment june",
    state: "ACTIVE",
    baseEventId: "UNR",
    eventId: "UNR_0822",
    category: "Elections > United States House",
    page: 1,
    perPage: 20,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsMarketsSearch } from "@ariesdotcom/finance-dev/funcs/predictions-markets-search.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsMarketsSearch(financeDev, {
    q: "unemployment june",
    state: "ACTIVE",
    baseEventId: "UNR",
    eventId: "UNR_0822",
    category: "Elections > United States House",
    page: 1,
    perPage: 20,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("predictionsMarketsSearch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchRequest](../../models/operations/search-request.md)                                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchResponse](../../models/operations/search-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorEnvelope        | 400                         | application/json            |
| errors.ErrorEnvelope        | 502                         | application/json            |
| errors.PetstoreDefaultError | 4XX, 5XX                    | \*/\*                       |