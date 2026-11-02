# MarketData

## Overview

### Available Operations

* [searchEtbSymbols](#searchetbsymbols) - Search Easy-to-Borrow Symbols
* [getOptionDetails](#getoptiondetails) - Get option details
* [searchSymbols](#searchsymbols) - Search Symbols

## searchEtbSymbols

Answers borrowability for a batch of symbols. Use this instead of fetching the whole list when you only care about a handful — for example, deciding whether to show a short-sell option on a ticker page. This is a POST rather than a GET because a symbol list has no practical URL-length limit. Symbols are uppercased and trimmed before the lookup and duplicates collapse, so `count` can be lower than the number of symbols you sent; always read answers out of `results` by uppercase key rather than matching them against your request array by index. Reads the same underlying set as GET /v1/etb, so the two endpoints can never disagree.

### Example Usage: duplicatesCollapse

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="duplicatesCollapse" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "aapl",
      " AAPL ",
      "AAPL",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "aapl",
      " AAPL ",
      "AAPL",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat_message" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat_string" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_body

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="invalid_body" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: missing_body

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="missing_body" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: missing_symbols

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="missing_symbols" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: mixedCase

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="mixedCase" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="nested" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="nested_error_object" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: too_many_symbols

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="too_many_symbols" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.searchEtbSymbols({
    symbols: [
      "AAPL",
      "GME",
      "msft",
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
import { marketDataSearchEtbSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataSearchEtbSymbols(financeDev, {
    symbols: [
      "AAPL",
      "GME",
      "msft",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataSearchEtbSymbols failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.EtbSearchRequest](../../models/etb-search-request.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EtbSearchResponse](../../models/etb-search-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.AuthenticationErrorEnvelope | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.ErrorResponse               | 403                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 403                                | application/json                   |
| errors.ErrorResponse               | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## getOptionDetails

Batch option contract details for one or more OSI option symbols. Response includes `data` with per-symbol pricing fields (`lastPrice`, `bidPrice`, `askPrice`, `midPrice`, `closePrice`) and an `errors` array for symbols that cannot be returned. At least one symbol is required.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOptionDetails" method="get" path="/v1/marketdata/options/details" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.marketData.getOptionDetails({
    symbols: "GOOG270115C00285000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { marketDataGetOptionDetails } from "@ariesdotcom/finance-dev/funcs/market-data-get-option-details.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await marketDataGetOptionDetails(financeDev, {
    symbols: "GOOG270115C00285000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketDataGetOptionDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetOptionDetailsRequest](../../models/operations/get-option-details-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetOptionDetailsResponse](../../models/get-option-details-response.md)\>**

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

## searchSymbols

Search for trading symbols including stocks, indices, options, and futures. **Prefixes:** '.' searches options (e.g. '.AAPL'); '/' searches futures (e.g. '/ES'). Without a prefix, searches stocks and indices together, merges matches, ranks them, and returns at most `limit` results. The '!' character is **not** a special prefix—only '.' and '/' are. Default limit is 20 if omitted (max 100).

### Example Usage: futures

<!-- UsageSnippet language="typescript" operationID="searchMarketSymbols" method="get" path="/v1/marketdata/search" example="futures" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

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
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { marketDataSearchSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-symbols.js";

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
import { FinanceDev } from "@ariesdotcom/finance-dev";

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
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { marketDataSearchSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-symbols.js";

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
import { FinanceDev } from "@ariesdotcom/finance-dev";

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
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { marketDataSearchSymbols } from "@ariesdotcom/finance-dev/funcs/market-data-search-symbols.js";

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