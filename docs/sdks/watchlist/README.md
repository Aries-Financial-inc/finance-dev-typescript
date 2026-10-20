# Watchlist

## Overview

### Available Operations

* [list](#list) - List Watchlists
* [create](#create) - Create Watchlist
* [replaceAll](#replaceall) - Replace All Watchlists
* [delete](#delete) - Delete Watchlist
* [get](#get) - Get Watchlist
* [update](#update) - Update Watchlist

## list

List all watchlists owned by the authenticated user. Users normally always have at least one watchlist; if the user has none, this endpoint returns 500 rather than an empty list.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConfigWatchlists" method="get" path="/v1/config/watchlist" example="watchlists" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.list();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistList } from "finance-dev/funcs/watchlist-list.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistList(financeDev);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistList failed:", res.error);
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

**Promise\<[models.WatchlistResponse](../../models/watchlist-response.md)\>**

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

## create

Create a new watchlist for the authenticated user. Watchlist names must be unique per user; creating a watchlist with a name the user already has returns 400 with error code `WATCHLIST_ALREADY_EXISTS`.

**Symbol validation:** Submitted symbols are uppercased, de-duplicated, and checked against the symbol resolver. Symbols that can't be resolved are dropped from the stored list and returned in the response's `invalid_symbols` field instead of causing the request to fail.

### Example Usage: createWatchlist

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="createWatchlist" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "Tech Stocks",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "Tech Stocks",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: created

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="created" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: createdWithInvalidSymbols

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="createdWithInvalidSymbols" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_bad_request

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="nested_bad_request" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_shared_http_error

<!-- UsageSnippet language="typescript" operationID="createConfigWatchlist" method="post" path="/v1/config/watchlist" example="nested_shared_http_error" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.create({
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
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
import { watchlistCreate } from "finance-dev/funcs/watchlist-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistCreate(financeDev, {
    name: "<value>",
    symbols: [
      "AAPL",
      "GOOGL",
      "MSFT",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CreateWatchlistRequest](../../models/create-watchlist-request.md)                                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Watchlist](../../models/watchlist.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.AuthenticationErrorEnvelope | 400                                | application/json                   |
| errors.ErrorResponse               | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.ErrorResponse               | 403                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 403                                | application/json                   |
| errors.ErrorResponse               | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## replaceAll

Replace the authenticated user's entire set of watchlists in a single call. Send the full desired list as an array: entries matching an existing watchlist by `name` (exact, case-sensitive) are updated in place, keeping their `id` and replacing their `symbols`; entries with a new `name` are created; and every existing watchlist whose `name` is **not** present in the array is deleted. Sending an empty array `[]` deletes all of the user's watchlists and creates a single new `"Default"` watchlist with no symbols.

Unlike Create and Update, symbols sent here are stored as-is and are **not** uppercased or checked against the symbol resolver. If `symbols` is omitted for an entry, that watchlist is stored with `symbols: null`.

### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, [
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, [
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: nested_bad_request

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="nested_bad_request" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, [
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: nested_shared_http_error

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="nested_shared_http_error" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: replaceAll

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="replaceAll" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([
    {
      name: "Tech Stocks",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
    {
      name: "Finance",
      symbols: [
        "JPM",
        "BAC",
        "GS",
      ],
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, [
    {
      name: "Tech Stocks",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
    {
      name: "Finance",
      symbols: [
        "JPM",
        "BAC",
        "GS",
      ],
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: replaced

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="replaced" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, [
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: resetAll

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="resetAll" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, []);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```
### Example Usage: resetToDefault

<!-- UsageSnippet language="typescript" operationID="replaceConfigWatchlists" method="put" path="/v1/config/watchlist" example="resetToDefault" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.replaceAll([
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistReplaceAll } from "finance-dev/funcs/watchlist-replace-all.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistReplaceAll(financeDev, [
    {
      name: "<value>",
      symbols: [
        "AAPL",
        "GOOGL",
        "MSFT",
      ],
    },
  ]);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistReplaceAll failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.WatchlistRequest[]](../../models/.md)                                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.WatchlistResponse](../../models/watchlist-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.AuthenticationErrorEnvelope | 400                                | application/json                   |
| errors.ErrorResponse               | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.ErrorResponse               | 403                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 403                                | application/json                   |
| errors.ErrorResponse               | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## delete

Delete one of the user's watchlists by its numeric ID.

**Important — last-watchlist rule:** If this is the user's *only remaining* watchlist, the server does not actually delete it. Instead it **resets it to a default empty state** (name set to `"Default"`, `symbols` cleared) so the user always has at least one watchlist available in the UI.

**Tip:** The response body returns the affected watchlist — whether it was actually deleted or reset — so you can update your local store without making a follow-up GET request. Compare `name` and `symbols` in the response to decide whether to render the 'reset to default' state.

### Example Usage: deleted

<!-- UsageSnippet language="typescript" operationID="deleteConfigWatchlistById" method="delete" path="/v1/config/watchlist/{watchlist_id}" example="deleted" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.delete({
    watchlistId: 12345,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistDelete } from "finance-dev/funcs/watchlist-delete.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistDelete(financeDev, {
    watchlistId: 12345,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistDelete failed:", res.error);
  }
}

run();
```
### Example Usage: resetToDefault

<!-- UsageSnippet language="typescript" operationID="deleteConfigWatchlistById" method="delete" path="/v1/config/watchlist/{watchlist_id}" example="resetToDefault" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.delete({
    watchlistId: 12345,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistDelete } from "finance-dev/funcs/watchlist-delete.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistDelete(financeDev, {
    watchlistId: 12345,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteConfigWatchlistByIdRequest](../../models/operations/delete-config-watchlist-by-id-request.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Watchlist](../../models/watchlist.md)\>**

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
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## get

Retrieve a single watchlist owned by the authenticated user, identified by its numeric `watchlist_id`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConfigWatchlistById" method="get" path="/v1/config/watchlist/{watchlist_id}" example="found" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.get({
    watchlistId: 12345,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { watchlistGet } from "finance-dev/funcs/watchlist-get.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistGet(financeDev, {
    watchlistId: 12345,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConfigWatchlistByIdRequest](../../models/operations/get-config-watchlist-by-id-request.md)                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Watchlist](../../models/watchlist.md)\>**

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
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## update

Partially update a watchlist owned by the authenticated user: rename it, add symbols, remove symbols, or any combination of these. Include at least one of `name`, `add_symbols`, or `remove_symbols`. Renaming to a name the user already uses for another watchlist returns 400 with error code `WATCHLIST_ALREADY_EXISTS`.

**Symbol validation:** Symbols in `add_symbols` are uppercased; symbols already in the watchlist are skipped, and the rest are checked against the symbol resolver. Any that can't be resolved are dropped from the stored list and returned in the response's `invalid_symbols` field. Symbols in `remove_symbols` are uppercased for comparison and removed from the resulting symbol set after additions are applied, so a symbol present in both lists ends up removed.

### Example Usage: addAndRemoveSymbols

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="addAndRemoveSymbols" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      name: "<value>",
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      name: "<value>",
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_bad_request

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="nested_bad_request" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      name: "<value>",
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      name: "<value>",
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_shared_http_error

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="nested_shared_http_error" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      name: "<value>",
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      name: "<value>",
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: renameWatchlist

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="renameWatchlist" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      name: "Growth Stocks",
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      name: "Growth Stocks",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: renamed

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="renamed" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: symbolsUpdated

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="symbolsUpdated" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: symbolsUpdatedWithInvalid

<!-- UsageSnippet language="typescript" operationID="updateConfigWatchlistById" method="patch" path="/v1/config/watchlist/{watchlist_id}" example="symbolsUpdatedWithInvalid" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.watchlist.update({
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
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
import { watchlistUpdate } from "finance-dev/funcs/watchlist-update.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await watchlistUpdate(financeDev, {
    watchlistId: 12345,
    body: {
      addSymbols: [
        "TSLA",
      ],
      removeSymbols: [
        "MSFT",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("watchlistUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateConfigWatchlistByIdRequest](../../models/operations/update-config-watchlist-by-id-request.md)                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Watchlist](../../models/watchlist.md)\>**

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
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |