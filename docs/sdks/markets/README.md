# Predictions.Markets

## Overview

### Available Operations

* [getBaseEvent](#getbaseevent) - Get a base event with its events and each event's contracts
* [getEventContracts](#geteventcontracts) - Get an event and all contracts under it
* [search](#search) - Search contracts, events or base events

## getBaseEvent

Get a base event with its events and each event's contracts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBaseEvent" method="get" path="/v1/predictions/base-events/{baseEventId}" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictions.markets.getBaseEvent({
    baseEventId: "UNR",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsMarketsGetBaseEvent } from "finance-dev/funcs/predictions-markets-get-base-event.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsMarketsGetBaseEvent(financeDev, {
    baseEventId: "UNR",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsMarketsGetBaseEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBaseEventRequest](../../models/operations/get-base-event-request.md)                                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetBaseEventResponse](../../models/operations/get-base-event-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorEnvelope        | 400, 404                    | application/json            |
| errors.ErrorEnvelope        | 500                         | application/json            |
| errors.PetstoreDefaultError | 4XX, 5XX                    | \*/\*                       |

## getEventContracts

Get an event and all contracts under it

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEventContracts" method="get" path="/v1/predictions/events/{eventId}/contracts" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictions.markets.getEventContracts({
    eventId: "HORC_1126",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsMarketsGetEventContracts } from "finance-dev/funcs/predictions-markets-get-event-contracts.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsMarketsGetEventContracts(financeDev, {
    eventId: "HORC_1126",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsMarketsGetEventContracts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEventContractsRequest](../../models/operations/get-event-contracts-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetEventContractsResponse](../../models/operations/get-event-contracts-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorEnvelope        | 400, 404                    | application/json            |
| errors.ErrorEnvelope        | 500                         | application/json            |
| errors.PetstoreDefaultError | 4XX, 5XX                    | \*/\*                       |

## search

Full-text search over one index of event contracts. Filters always apply to contracts, so with type=events or type=base-events an event or base event is found through its matching contracts: one with none (for example, only DELETED contracts under the default state) is not returned. The index trails the catalogue by seconds.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="search" method="get" path="/v1/predictions/search" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictions.markets.search({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsMarketsSearch } from "finance-dev/funcs/predictions-markets-search.js";

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