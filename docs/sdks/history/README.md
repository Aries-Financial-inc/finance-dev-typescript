# Predictions.History

## Overview

### Available Operations

* [getHistory](#gethistory) - Get historical ticks for a single symbol
* [getHistoryBatch](#gethistorybatch) - Batch historical ticks for up to 5 symbols

## getHistory

Returns prediction-market YES/NO price history for a single symbol. Time range is optional; omit both `from` and `to` to use the service default. `from`/`to` accept RFC3339 strings (e.g. `2026-04-01T00:00:00Z`) or Unix seconds/milliseconds.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHistory" method="get" path="/v1/predictions/historical-data" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictions.history.getHistory({
    symbol: "HORC_1126_Republican",
    from: "2026-04-01T00:00:00Z",
    to: "2026-04-20T00:00:00Z",
    limit: 500,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsHistoryGetHistory } from "finance-dev/funcs/predictions-history-get-history.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsHistoryGetHistory(financeDev, {
    symbol: "HORC_1126_Republican",
    from: "2026-04-01T00:00:00Z",
    to: "2026-04-20T00:00:00Z",
    limit: 500,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsHistoryGetHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHistoryRequest](../../models/operations/get-history-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHistoryResponse](../../models/operations/get-history-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorEnvelope        | 400                         | application/json            |
| errors.ErrorEnvelope        | 502                         | application/json            |
| errors.PetstoreDefaultError | 4XX, 5XX                    | \*/\*                       |

## getHistoryBatch

Returns historical ticks for multiple symbols in one request. Each query may carry its own optional `from`/`to`/`limit`. Maximum 5 queries per call.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHistoryBatch" method="post" path="/v1/predictions/historical-data/batch" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictions.history.getHistoryBatch({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsHistoryGetHistoryBatch } from "finance-dev/funcs/predictions-history-get-history-batch.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsHistoryGetHistoryBatch(financeDev, {
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
    console.log("predictionsHistoryGetHistoryBatch failed:", res.error);
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