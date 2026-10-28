# PredictionOrders

## Overview

### Available Operations

* [create](#create) - Place prediction order

## create

**Closed beta.** Available only to accounts enrolled in the prediction-market orders closed beta. Places a prediction-market order for the authenticated user. Returns `202` as soon as the order is on its way to the venue, normally in state `pending_new`. Read the venue's answer back with Get Prediction Order.

### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="placePredictionOrder" method="post" path="/v1/predictions/orders" example="flat_message" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictionOrders.create({
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
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionOrdersCreate } from "@ariesdotcom/finance-dev/funcs/prediction-orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionOrdersCreate(financeDev, {
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
    console.log("predictionOrdersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="placePredictionOrder" method="post" path="/v1/predictions/orders" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictionOrders.create({
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
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionOrdersCreate } from "@ariesdotcom/finance-dev/funcs/prediction-orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionOrdersCreate(financeDev, {
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
    console.log("predictionOrdersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="placePredictionOrder" method="post" path="/v1/predictions/orders" example="nested_error_object" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.predictionOrders.create({
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
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionOrdersCreate } from "@ariesdotcom/finance-dev/funcs/prediction-orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await predictionOrdersCreate(financeDev, {
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
    console.log("predictionOrdersCreate failed:", res.error);
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