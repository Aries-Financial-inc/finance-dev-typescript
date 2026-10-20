# Predictions.Orders

## Overview

### Available Operations

* [listPredictionOrders](#listpredictionorders) - List prediction orders
* [placePredictionOrder](#placepredictionorder) - Place prediction order
* [getPredictionOrder](#getpredictionorder) - Get prediction order

## listPredictionOrders

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Returns the authenticated user's prediction-market orders, newest first, one page at a time.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listPredictionOrders" method="get" path="/v1/predictions/orders" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.listPredictionOrders({
    status: "open",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsOrdersListPredictionOrders } from "finance-dev/funcs/predictions-orders-list-prediction-orders.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await predictionsOrdersListPredictionOrders(financeDev, {
    status: "open",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersListPredictionOrders failed:", res.error);
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

## placePredictionOrder

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Places a prediction-market order for the authenticated user. Returns `202` as soon as the order is on its way to the venue, normally in state `pending_new`. Read the venue's answer back with Get Prediction Order.

### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="placePredictionOrder" method="post" path="/v1/predictions/orders" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.placePredictionOrder({
    idempotencyKey: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    body: {
      accountId: "ACCOUNT-0001",
      clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
      orderType: "limit",
      outcome: "YES",
      price: "0.54",
      quantity: "10",
      side: "buy",
      stopPx: "0.50",
      symbol: "HORC_1126_Republican",
      timeInForce: "day",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsOrdersPlacePredictionOrder } from "finance-dev/funcs/predictions-orders-place-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await predictionsOrdersPlacePredictionOrder(financeDev, {
    idempotencyKey: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    body: {
      accountId: "ACCOUNT-0001",
      clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
      orderType: "limit",
      outcome: "YES",
      price: "0.54",
      quantity: "10",
      side: "buy",
      stopPx: "0.50",
      symbol: "HORC_1126_Republican",
      timeInForce: "day",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersPlacePredictionOrder failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="placePredictionOrder" method="post" path="/v1/predictions/orders" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.placePredictionOrder({
    idempotencyKey: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    body: {
      accountId: "ACCOUNT-0001",
      clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
      orderType: "limit",
      outcome: "YES",
      price: "0.54",
      quantity: "10",
      side: "buy",
      stopPx: "0.50",
      symbol: "HORC_1126_Republican",
      timeInForce: "day",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsOrdersPlacePredictionOrder } from "finance-dev/funcs/predictions-orders-place-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await predictionsOrdersPlacePredictionOrder(financeDev, {
    idempotencyKey: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    body: {
      accountId: "ACCOUNT-0001",
      clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
      orderType: "limit",
      outcome: "YES",
      price: "0.54",
      quantity: "10",
      side: "buy",
      stopPx: "0.50",
      symbol: "HORC_1126_Republican",
      timeInForce: "day",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersPlacePredictionOrder failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="placePredictionOrder" method="post" path="/v1/predictions/orders" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.placePredictionOrder({
    idempotencyKey: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    body: {
      accountId: "ACCOUNT-0001",
      clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
      orderType: "limit",
      outcome: "YES",
      price: "0.54",
      quantity: "10",
      side: "buy",
      stopPx: "0.50",
      symbol: "HORC_1126_Republican",
      timeInForce: "day",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsOrdersPlacePredictionOrder } from "finance-dev/funcs/predictions-orders-place-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await predictionsOrdersPlacePredictionOrder(financeDev, {
    idempotencyKey: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
    body: {
      accountId: "ACCOUNT-0001",
      clientOrderRef: "7d1c8e0a-4b8f-4e3a-9f43-2a6b1d0c9e11",
      orderType: "limit",
      outcome: "YES",
      price: "0.54",
      quantity: "10",
      side: "buy",
      stopPx: "0.50",
      symbol: "HORC_1126_Republican",
      timeInForce: "day",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersPlacePredictionOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PlacePredictionOrderRequest](../../models/operations/place-prediction-order-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PlacePredictionOrderResponse](../../models/operations/place-prediction-order-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 400, 409, 429                      | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500, 503, 504                      | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## getPredictionOrder

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Returns one of the authenticated user's prediction-market orders together with every venue execution report against it.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getPredictionOrder" method="get" path="/v1/predictions/orders/{orderId}" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.predictions.orders.getPredictionOrder({
    orderId: "26cc5dad-e417-4e9f-acfd-09d65e80b551",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { predictionsOrdersGetPredictionOrder } from "finance-dev/funcs/predictions-orders-get-prediction-order.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await predictionsOrdersGetPredictionOrder(financeDev, {
    orderId: "26cc5dad-e417-4e9f-acfd-09d65e80b551",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsOrdersGetPredictionOrder failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetPredictionOrderRequest](../../models/operations/get-prediction-order-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetPredictionOrderResponse](../../models/operations/get-prediction-order-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 404                                | application/json                   |
| errors.PredOrdersErrorEnvelope     | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |