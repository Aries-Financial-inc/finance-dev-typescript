# Market

## Overview

### Available Operations

* [getEtbList](#getetblist) - Get Easy-to-Borrow List
* [searchEtbSymbols](#searchetbsymbols) - Search Easy-to-Borrow Symbols
* [getHolidays](#getholidays) - Get Market Holidays
* [getStatus](#getstatus) - Get Market Status
* [getEquityDetails](#getequitydetails) - Get equity details
* [getOptionDetails](#getoptiondetails) - Get option details

## getEtbList

Returns every symbol on today's easy-to-borrow (ETB) list: the complete set of US equities that can be sold short without first locating shares. A symbol on the list is easy to borrow and can be shorted normally; a symbol absent from it is hard to borrow (HTB) and cannot be shorted without a locate. Absence is a positive answer, not missing data. The list is replaced once per trading day before the market opens and does not change intraday. It is not account-scoped — borrowability is a property of the symbol, so every caller gets the same answer. The response can reach a few hundred KB because the borrowable universe runs to thousands of symbols; fetch it once per trading day and check membership locally, or use POST /v1/etb/search when you only care about a handful of symbols.

### Example Usage: not_loaded

<!-- UsageSnippet language="typescript" operationID="getEtbList" method="get" path="/v1/etb" example="not_loaded" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.getEtbList();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketGetEtbList } from "finance-dev/funcs/market-get-etb-list.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketGetEtbList(financeDev);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketGetEtbList failed:", res.error);
  }
}

run();
```
### Example Usage: success

<!-- UsageSnippet language="typescript" operationID="getEtbList" method="get" path="/v1/etb" example="success" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.getEtbList();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketGetEtbList } from "finance-dev/funcs/market-get-etb-list.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketGetEtbList(financeDev);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketGetEtbList failed:", res.error);
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

**Promise\<[models.EtbListResponse](../../models/etb-list-response.md)\>**

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

## searchEtbSymbols

Answers borrowability for a batch of symbols. Use this instead of fetching the whole list when you only care about a handful — for example, deciding whether to show a short-sell option on a ticker page. This is a POST rather than a GET because a symbol list has no practical URL-length limit. Symbols are uppercased and trimmed before the lookup and duplicates collapse, so `count` can be lower than the number of symbols you sent; always read answers out of `results` by uppercase key rather than matching them against your request array by index. Reads the same underlying set as GET /v1/etb, so the two endpoints can never disagree.

### Example Usage: duplicatesCollapse

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="duplicatesCollapse" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_body

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="invalid_body" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: missing_body

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="missing_body" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: missing_symbols

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="missing_symbols" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: mixedCase

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="mixedCase" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
  }
}

run();
```
### Example Usage: too_many_symbols

<!-- UsageSnippet language="typescript" operationID="searchEtbSymbols" method="post" path="/v1/etb/search" example="too_many_symbols" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.searchEtbSymbols({
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
import { FinanceDevCore } from "finance-dev/core.js";
import { marketSearchEtbSymbols } from "finance-dev/funcs/market-search-etb-symbols.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketSearchEtbSymbols(financeDev, {
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
    console.log("marketSearchEtbSymbols failed:", res.error);
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

## getHolidays

Retrieve market holiday schedules showing dates when exchanges are closed for official holidays and early close days.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMarketHolidays" method="get" path="/v1/market/holiday" example="default" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.getHolidays({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketGetHolidays } from "finance-dev/funcs/market-get-holidays.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketGetHolidays(financeDev, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketGetHolidays failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMarketHolidaysRequest](../../models/operations/get-market-holidays-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MarketHolidayResponse](../../models/market-holiday-response.md)\>**

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

## getStatus

Retrieve current market status indicating whether exchanges are open, closed, or in pre-market/after-hours trading sessions. Returns 400 when `exchange` is not a supported Finnhub exchange code; the error message lists the supported codes.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMarketStatus" method="get" path="/v1/market/status" example="default" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.getStatus({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketGetStatus } from "finance-dev/funcs/market-get-status.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketGetStatus(financeDev, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketGetStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMarketStatusRequest](../../models/operations/get-market-status-request.md)                                                                                      | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.MarketStatus](../../models/market-status.md)\>**

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

## getEquityDetails

Batch equity details from an internal cache with an automatic fallback when cached quotes are unavailable. Response includes `data` with per-symbol fields (camelCase: `bidPrice`, `openPrice`, `totalVolume`, etc.); see `EquityDetailsDTO` and `GetEquityDetailsResponse`. At least one symbol is required.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEquityDetails" method="get" path="/v1/marketdata/equities/details" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.getEquityDetails({
    symbols: "AAPL,MSFT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketGetEquityDetails } from "finance-dev/funcs/market-get-equity-details.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketGetEquityDetails(financeDev, {
    symbols: "AAPL,MSFT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketGetEquityDetails failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEquityDetailsRequest](../../models/operations/get-equity-details-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetEquityDetailsResponse](../../models/get-equity-details-response.md)\>**

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

## getOptionDetails

Batch option contract details for one or more OSI option symbols. Response includes `data` with per-symbol pricing fields (`lastPrice`, `bidPrice`, `askPrice`, `midPrice`, `closePrice`) and an `errors` array for symbols that cannot be returned. At least one symbol is required.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getOptionDetails" method="get" path="/v1/marketdata/options/details" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.market.getOptionDetails({
    symbols: "GOOG270115C00285000",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { marketGetOptionDetails } from "finance-dev/funcs/market-get-option-details.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await marketGetOptionDetails(financeDev, {
    symbols: "GOOG270115C00285000",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("marketGetOptionDetails failed:", res.error);
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