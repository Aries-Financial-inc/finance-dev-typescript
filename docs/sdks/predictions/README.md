# Predictions

## Overview

### Available Operations

* [batchGet](#batchget) - Batch historical ticks for up to 5 symbols
* [listOrders](#listorders) - List current prediction orders

## batchGet

Returns historical ticks for multiple symbols in one request. Each query may carry its own optional `from`/`to`/`limit`. Maximum 5 queries per call.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHistoryBatch" method="post" path="/v1/predictions/historical-data/batch" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictions.batchGet({
    queries: [
      {
        from: new Date("2026-04-01T00:00:00Z"),
        limit: 500,
        symbol: "HORC_1126_Republican",
        to: new Date("2026-04-20T00:00:00Z"),
      },
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsBatchGet } from "@ariesdotcom/finance-dev/funcs/predictions-batch-get.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsBatchGet(financeDev, {
    queries: [
      {
        from: new Date("2026-04-01T00:00:00Z"),
        limit: 500,
        symbol: "HORC_1126_Republican",
        to: new Date("2026-04-20T00:00:00Z"),
      },
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsBatchGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PredMdBatchHistoryRequest](../../models/pred-md-batch-history-request.md)                                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHistoryBatchResponse](../../models/operations/get-history-batch-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorEnvelope        | 400                         | application/json            |
| errors.ErrorEnvelope        | 502                         | application/json            |
| errors.PetstoreDefaultError | 4XX, 5XX                    | \*/\*                       |

## listOrders

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Returns the account's current orders, newest first, one page at a time: every order still open, however old (a GTC order), plus every order created or closed since the trading day rolled over at 17:00 America/Chicago. Older orders are read with List Prediction Order History.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPredictionOrders" method="get" path="/v1/predictions/orders" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.listOrders({
    status: "open",
    accountId: "ACCOUNT-0001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsListOrders } from "@ariesdotcom/finance-dev/funcs/predictions-list-orders.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsListOrders(financeDev, {
    status: "open",
    accountId: "ACCOUNT-0001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsListOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPredictionOrdersRequest](../../models/operations/list-prediction-orders-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPredictionOrdersResponse](../../models/operations/list-prediction-orders-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PredOrdersErrorEnvelope     | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |