# Predictions.Orders

## Overview

### Available Operations

* [listPredictionOrderHistory](#listpredictionorderhistory) - List prediction order history
* [listPredictionMassCancels](#listpredictionmasscancels) - List prediction mass cancels
* [massCancelPredictionOrders](#masscancelpredictionorders) - Mass cancel prediction orders
* [getPredictionMassCancel](#getpredictionmasscancel) - Get prediction mass cancel
* [replacePredictionOrder](#replacepredictionorder) - Replace prediction order
* [cancelPredictionOrder](#cancelpredictionorder) - Cancel prediction order

## listPredictionOrderHistory

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Returns every order on the account, newest first, one page at a time, optionally bounded by creation time.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPredictionOrderHistory" method="get" path="/v1/predictions/orders/history" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.listPredictionOrderHistory({
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
import { predictionsOrdersListPredictionOrderHistory } from "@ariesdotcom/finance-dev/funcs/predictions-orders-list-prediction-order-history.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersListPredictionOrderHistory(financeDev, {
    status: "open",
    accountId: "ACCOUNT-0001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersListPredictionOrderHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPredictionOrderHistoryRequest](../../models/operations/list-prediction-order-history-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPredictionOrderHistoryResponse](../../models/operations/list-prediction-order-history-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PredOrdersErrorEnvelope     | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## listPredictionMassCancels

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Returns the account's mass cancels, newest first, one page at a time.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPredictionMassCancels" method="get" path="/v1/predictions/orders/mass-cancels" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.listPredictionMassCancels({
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
import { predictionsOrdersListPredictionMassCancels } from "@ariesdotcom/finance-dev/funcs/predictions-orders-list-prediction-mass-cancels.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersListPredictionMassCancels(financeDev, {
    accountId: "ACCOUNT-0001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersListPredictionMassCancels failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListPredictionMassCancelsRequest](../../models/operations/list-prediction-mass-cancels-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListPredictionMassCancelsResponse](../../models/operations/list-prediction-mass-cancels-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.PredOrdersErrorEnvelope     | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## massCancelPredictionOrders

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Cancels every working order on an account, or only those in one contract, in one request to the venue. Returns `202` with the request, normally `pending`. A `202` does not mean any order is canceled: each order the venue cancels arrives as an ordinary order update.

### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="massCancelPredictionOrders" method="post" path="/v1/predictions/orders/mass-cancels" example="flat_message" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.massCancelPredictionOrders({
    accountId: "ACCOUNT-0001",
    symbol: "HORC_1126_Republican",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersMassCancelPredictionOrders } from "@ariesdotcom/finance-dev/funcs/predictions-orders-mass-cancel-prediction-orders.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersMassCancelPredictionOrders(financeDev, {
    accountId: "ACCOUNT-0001",
    symbol: "HORC_1126_Republican",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersMassCancelPredictionOrders failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="massCancelPredictionOrders" method="post" path="/v1/predictions/orders/mass-cancels" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.massCancelPredictionOrders({
    accountId: "ACCOUNT-0001",
    symbol: "HORC_1126_Republican",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersMassCancelPredictionOrders } from "@ariesdotcom/finance-dev/funcs/predictions-orders-mass-cancel-prediction-orders.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersMassCancelPredictionOrders(financeDev, {
    accountId: "ACCOUNT-0001",
    symbol: "HORC_1126_Republican",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersMassCancelPredictionOrders failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="massCancelPredictionOrders" method="post" path="/v1/predictions/orders/mass-cancels" example="nested_error_object" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.massCancelPredictionOrders({
    accountId: "ACCOUNT-0001",
    symbol: "HORC_1126_Republican",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersMassCancelPredictionOrders } from "@ariesdotcom/finance-dev/funcs/predictions-orders-mass-cancel-prediction-orders.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersMassCancelPredictionOrders(financeDev, {
    accountId: "ACCOUNT-0001",
    symbol: "HORC_1126_Republican",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersMassCancelPredictionOrders failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PredOrdersMassCancelRequest](../../models/pred-orders-mass-cancel-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.MassCancelPredictionOrdersResponse](../../models/operations/mass-cancel-prediction-orders-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 400, 429                           | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500, 503, 504                      | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## getPredictionMassCancel

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Returns one mass cancel and the venue's answer to it. The orders it canceled carry its `massCancelId` in their events.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPredictionMassCancel" method="get" path="/v1/predictions/orders/mass-cancels/{massCancelId}" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.getPredictionMassCancel({
    massCancelId: "97599149-c654-4879-ab4b-aaac771b2949",
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
import { predictionsOrdersGetPredictionMassCancel } from "@ariesdotcom/finance-dev/funcs/predictions-orders-get-prediction-mass-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersGetPredictionMassCancel(financeDev, {
    massCancelId: "97599149-c654-4879-ab4b-aaac771b2949",
    accountId: "ACCOUNT-0001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersGetPredictionMassCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPredictionMassCancelRequest](../../models/operations/get-prediction-mass-cancel-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPredictionMassCancelResponse](../../models/operations/get-prediction-mass-cancel-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 400, 404                           | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## replacePredictionOrder

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Amends a working order's terms. Returns `202` with the order and its amend outstanding (`pendingAction` `replace`). The order keeps its working terms until the venue confirms; if the venue refuses, they stay as they were and the reason is on the order.

### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="replacePredictionOrder" method="patch" path="/v1/predictions/orders/{orderId}" example="flat_message" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.replacePredictionOrder({
    orderId: "921c6861-f62f-49f2-9f94-5cc33496c5be",
    body: {
      accountId: "ACCOUNT-0001",
      price: "0.45",
      quantity: "20",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersReplacePredictionOrder } from "@ariesdotcom/finance-dev/funcs/predictions-orders-replace-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersReplacePredictionOrder(financeDev, {
    orderId: "921c6861-f62f-49f2-9f94-5cc33496c5be",
    body: {
      accountId: "ACCOUNT-0001",
      price: "0.45",
      quantity: "20",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersReplacePredictionOrder failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="replacePredictionOrder" method="patch" path="/v1/predictions/orders/{orderId}" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.replacePredictionOrder({
    orderId: "47bb47c0-3414-4b7a-9d44-6ade2d5c0f4d",
    body: {
      accountId: "ACCOUNT-0001",
      price: "0.45",
      quantity: "20",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersReplacePredictionOrder } from "@ariesdotcom/finance-dev/funcs/predictions-orders-replace-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersReplacePredictionOrder(financeDev, {
    orderId: "47bb47c0-3414-4b7a-9d44-6ade2d5c0f4d",
    body: {
      accountId: "ACCOUNT-0001",
      price: "0.45",
      quantity: "20",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersReplacePredictionOrder failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="replacePredictionOrder" method="patch" path="/v1/predictions/orders/{orderId}" example="nested_error_object" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.replacePredictionOrder({
    orderId: "ac743bd7-eca0-4de3-8850-ff3e84165bec",
    body: {
      accountId: "ACCOUNT-0001",
      price: "0.45",
      quantity: "20",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersReplacePredictionOrder } from "@ariesdotcom/finance-dev/funcs/predictions-orders-replace-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersReplacePredictionOrder(financeDev, {
    orderId: "ac743bd7-eca0-4de3-8850-ff3e84165bec",
    body: {
      accountId: "ACCOUNT-0001",
      price: "0.45",
      quantity: "20",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersReplacePredictionOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ReplacePredictionOrderRequest](../../models/operations/replace-prediction-order-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReplacePredictionOrderResponse](../../models/operations/replace-prediction-order-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 400, 404, 409, 429                 | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500, 503, 504                      | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## cancelPredictionOrder

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Cancels a working order in full; the venue has no partial cancel. Returns `202` with the order and its cancel outstanding (`pendingAction` `cancel`). Whether the venue canceled it arrives as an order update.

### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="cancelPredictionOrder" method="post" path="/v1/predictions/orders/{orderId}/cancel" example="flat_message" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.cancelPredictionOrder({
    orderId: "b96f4fb8-14e1-472d-8996-8ad676e6baed",
    body: {
      accountId: "ACCOUNT-0001",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersCancelPredictionOrder } from "@ariesdotcom/finance-dev/funcs/predictions-orders-cancel-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersCancelPredictionOrder(financeDev, {
    orderId: "b96f4fb8-14e1-472d-8996-8ad676e6baed",
    body: {
      accountId: "ACCOUNT-0001",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersCancelPredictionOrder failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="cancelPredictionOrder" method="post" path="/v1/predictions/orders/{orderId}/cancel" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.cancelPredictionOrder({
    orderId: "bbc50f07-2a0f-411a-b275-427d01e5593e",
    body: {
      accountId: "ACCOUNT-0001",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersCancelPredictionOrder } from "@ariesdotcom/finance-dev/funcs/predictions-orders-cancel-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersCancelPredictionOrder(financeDev, {
    orderId: "bbc50f07-2a0f-411a-b275-427d01e5593e",
    body: {
      accountId: "ACCOUNT-0001",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersCancelPredictionOrder failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="cancelPredictionOrder" method="post" path="/v1/predictions/orders/{orderId}/cancel" example="nested_error_object" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.cancelPredictionOrder({
    orderId: "28fa94ca-8efa-47cc-b2c2-c77b0901c7c8",
    body: {
      accountId: "ACCOUNT-0001",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsOrdersCancelPredictionOrder } from "@ariesdotcom/finance-dev/funcs/predictions-orders-cancel-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionsOrdersCancelPredictionOrder(financeDev, {
    orderId: "28fa94ca-8efa-47cc-b2c2-c77b0901c7c8",
    body: {
      accountId: "ACCOUNT-0001",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersCancelPredictionOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CancelPredictionOrderRequest](../../models/operations/cancel-prediction-order-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CancelPredictionOrderResponse](../../models/operations/cancel-prediction-order-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 400, 404, 409, 429                 | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500, 503, 504                      | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |