# PredictionMarkets

## Overview

### Available Operations

* [getBaseEvent](#getbaseevent) - Get a base event with its events and each event's contracts
* [getEventContracts](#geteventcontracts) - Get an event and all contracts under it

## getBaseEvent

Get a base event with its events and each event's contracts

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getBaseEvent" method="get" path="/v1/predictions/base-events/{baseEventId}" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictionMarkets.getBaseEvent({
    baseEventId: "UNR",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionMarketsGetBaseEvent } from "@ariesdotcom/finance-dev/funcs/prediction-markets-get-base-event.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionMarketsGetBaseEvent(financeDev, {
    baseEventId: "UNR",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionMarketsGetBaseEvent failed:", res.error);
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
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictionMarkets.getEventContracts({
    eventId: "HORC_1126",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionMarketsGetEventContracts } from "@ariesdotcom/finance-dev/funcs/prediction-markets-get-event-contracts.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionMarketsGetEventContracts(financeDev, {
    eventId: "HORC_1126",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionMarketsGetEventContracts failed:", res.error);
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