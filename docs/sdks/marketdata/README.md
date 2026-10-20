# MarketData

## Overview

### Available Operations

* [searchSymbols](#searchsymbols) - Search Symbols

## searchSymbols

Search for trading symbols including stocks, indices, options, and futures. **Prefixes:** '.' searches options (e.g. '.AAPL'); '/' searches futures (e.g. '/ES'). Without a prefix, searches stocks and indices together, merges matches, ranks them, and returns at most `limit` results. The '!' character is **not** a special prefix—only '.' and '/' are. Default limit is 20 if omitted (max 100).

### Example Usage: futures

<!-- UsageSnippet language="typescript" operationID="searchMarketSymbols" method="get" path="/v1/marketdata/search" example="futures" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchSymbols({
    query: "/ES",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketDataSearchSymbols } from "finance-dev/funcs/market-data-search-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchSymbols(financeDev, {
    query: "/ES",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: option

<!-- UsageSnippet language="typescript" operationID="searchMarketSymbols" method="get" path="/v1/marketdata/search" example="option" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchSymbols({
    query: ".AAPL",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketDataSearchSymbols } from "finance-dev/funcs/market-data-search-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchSymbols(financeDev, {
    query: ".AAPL",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: stock

<!-- UsageSnippet language="typescript" operationID="searchMarketSymbols" method="get" path="/v1/marketdata/search" example="stock" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchSymbols({
    query: "AAPL",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketDataSearchSymbols } from "finance-dev/funcs/market-data-search-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchSymbols(financeDev, {
    query: "AAPL",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchSymbols failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.SearchMarketSymbolsRequest](../../models/operations/search-market-symbols-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.SearchSymbolResponseItem[]](../../models/.md)\>**

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