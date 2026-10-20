# Accounts

## Overview

### Available Operations

* [getAccountPositions](#getaccountpositions) - Get Account Positions
* [getAccountBalance](#getaccountbalance) - Get Account Balance
* [getUserAccounts](#getuseraccounts) - Get User Accounts

## getAccountPositions

Retrieve all open positions for a specific account. Use this for portfolio screens and pre-trade checks before selling or closing a position. Positions come only from the position-state MemoryDB read model; there is no Sterling or database fallback. An unavailable read model returns 503. Authorization accepts either the `account:information` or the `position:information` scope.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountPositions" method="get" path="/v1/accounts/{id}/positions" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.accounts.getAccountPositions({
    id: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { accountsGetAccountPositions } from "finance-dev/funcs/accounts-get-account-positions.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await accountsGetAccountPositions(financeDev, {
    id: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsGetAccountPositions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountPositionsRequest](../../models/operations/get-account-positions-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetPositionsResponse](../../models/get-positions-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.AuthenticationErrorEnvelope | 400                                | application/json                   |
| errors.ErrorResponse               | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.ErrorResponse               | 403                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 403                                | application/json                   |
| errors.ErrorResponse               | 404                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 404                                | application/json                   |
| errors.ErrorResponse               | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 503                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## getAccountBalance

Retrieve account balance, cash, equity, and buying power for a specific account (v2). Use this before showing an order ticket or checking whether the account can support a trade. Sterling and the stored balance are read concurrently. The stored read uses Dragonfly, then PostgreSQL on a full cache miss. Sterling supplies the balance when available, enriched with stored Apex fields; otherwise the stored balance is used.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getAccountBalance" method="get" path="/v2/accounts/{id}/balance" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.accounts.getAccountBalance({
    id: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { accountsGetAccountBalance } from "finance-dev/funcs/accounts-get-account-balance.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await accountsGetAccountBalance(financeDev, {
    id: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsGetAccountBalance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAccountBalanceRequest](../../models/operations/get-account-balance-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.AccountBalanceV2](../../models/account-balance-v2.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.AuthenticationErrorEnvelope | 400                                | application/json                   |
| errors.ErrorResponse               | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.ErrorResponse               | 403                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 403                                | application/json                   |
| errors.ErrorResponse               | 404                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 404                                | application/json                   |
| errors.ErrorResponse               | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 503                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## getUserAccounts

Retrieve all trading accounts for the currently authenticated user. Returns a list of accounts with trading account ID, broker account ID, status, simulation flag, and account type and class. Users may have multiple accounts (for example a live account and a simulation account). Requires bearer token authentication.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getUserAccounts" method="get" path="/v2/users/me/accounts" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.accounts.getUserAccounts();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { accountsGetUserAccounts } from "finance-dev/funcs/accounts-get-user-accounts.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await accountsGetUserAccounts(financeDev);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("accountsGetUserAccounts failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetAccountsResponse](../../models/get-accounts-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.ErrorResponse               | 403                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 403                                | application/json                   |
| errors.ErrorResponse               | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |