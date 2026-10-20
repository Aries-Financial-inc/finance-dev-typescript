# Calendar

## Overview

### Available Operations

* [getConferenceCalls](#getconferencecalls) - Get Conference Calls
* [getEarningsCalendar](#getearningscalendar) - Get Earnings Calendar
* [getEconomicsCalendar](#geteconomicscalendar) - Get Economics Calendar
* [getHistoricalData](#gethistoricaldata) - Get Historical Economic Data
* [getMergersAndAcquisitions](#getmergersandacquisitions) - Get Mergers & Acquisitions

## getConferenceCalls

Retrieve upcoming and past earnings conference call schedules including dates, times, and dial-in information for management discussions.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getConferenceCalls" method="get" path="/v1/calendars/conference-calls" example="success" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.calendar.getConferenceCalls({
    dateFrom: new Date("2024-01-15"),
    dateTo: new Date("2024-01-19"),
    tickers: "AAPL,MSFT,GOOGL",
    page: 0,
    pageSize: 100,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { calendarGetConferenceCalls } from "finance-dev/funcs/calendar-get-conference-calls.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await calendarGetConferenceCalls(financeDev, {
    dateFrom: new Date("2024-01-15"),
    dateTo: new Date("2024-01-19"),
    tickers: "AAPL,MSFT,GOOGL",
    page: 0,
    pageSize: 100,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("calendarGetConferenceCalls failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetConferenceCallsRequest](../../models/operations/get-conference-calls-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetConferenceCallsResponse](../../models/operations/get-conference-calls-response.md)\>**

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

## getEarningsCalendar

Retrieve upcoming earnings release dates and historical earnings announcement schedules for earnings season planning.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEarningsCalendar" method="get" path="/v1/calendars/earnings" example="success" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.calendar.getEarningsCalendar({
    from: new Date("2024-01-01"),
    to: new Date("2024-01-31"),
    symbol: "AAPL",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { calendarGetEarningsCalendar } from "finance-dev/funcs/calendar-get-earnings-calendar.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await calendarGetEarningsCalendar(financeDev, {
    from: new Date("2024-01-01"),
    to: new Date("2024-01-31"),
    symbol: "AAPL",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetEarningsCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEarningsCalendarRequest](../../models/operations/get-earnings-calendar-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EarningRelease[]](../../models/.md)\>**

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

## getEconomicsCalendar

Retrieve scheduled economic data releases including employment reports, GDP announcements, inflation data, and central bank decisions. Supports two independent query modes: (1) single date, or (2) explicit date range. Use only one mode per request.

Supply date, or supply both from and to. A complete from/to range takes precedence when date is also supplied.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getEconomicsCalendar" method="get" path="/v1/calendars/economics" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.calendar.getEconomicsCalendar({
    date: new Date("2024-01-15"),
    from: new Date("2024-01-15"),
    to: new Date("2024-03-15"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { calendarGetEconomicsCalendar } from "finance-dev/funcs/calendar-get-economics-calendar.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await calendarGetEconomicsCalendar(financeDev, {
    date: new Date("2024-01-15"),
    from: new Date("2024-01-15"),
    to: new Date("2024-03-15"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetEconomicsCalendar failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetEconomicsCalendarRequest](../../models/operations/get-economics-calendar-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.GetEconomicsCalendarResponse](../../models/get-economics-calendar-response.md)\>**

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

## getHistoricalData

Retrieve historical time series data for an economic indicator. Returns a direct array of data points (no wrapper). Path parameter **symbol** is the economic indicator symbol (e.g. USURTOT, UNITEDSTACONJOBCLA, UNITEDSTACONCRE). No query parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getHistoricalData" method="get" path="/v1/calendars/historical/{symbol}" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.calendar.getHistoricalData({
    symbol: "USURTOT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { calendarGetHistoricalData } from "finance-dev/funcs/calendar-get-historical-data.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await calendarGetHistoricalData(financeDev, {
    symbol: "USURTOT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("calendarGetHistoricalData failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetHistoricalDataRequest](../../models/operations/get-historical-data-request.md)                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.EconomicsIndicator[]](../../models/.md)\>**

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

## getMergersAndAcquisitions

Retrieve M&A activity including announced deals, merger terms, acquisition prices, and transaction timelines.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getMergersAndAcquisitions" method="get" path="/v1/calendars/mergers-acquisitions" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const result = await financeDev.calendar.getMergersAndAcquisitions({
    dateFrom: new Date("2024-01-01"),
    dateTo: new Date("2024-12-31"),
    tickers: "AAPL,MSFT",
    page: 0,
    pageSize: 50,
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { calendarGetMergersAndAcquisitions } from "finance-dev/funcs/calendar-get-mergers-and-acquisitions.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: process.env["PETSTORE_CLIENT_ID"] ?? "",
    clientSecret: process.env["PETSTORE_CLIENT_SECRET"] ?? "",
  },
});

async function run() {
  const res = await calendarGetMergersAndAcquisitions(financeDev, {
    dateFrom: new Date("2024-01-01"),
    dateTo: new Date("2024-12-31"),
    tickers: "AAPL,MSFT",
    page: 0,
    pageSize: 50,
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("calendarGetMergersAndAcquisitions failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetMergersAndAcquisitionsRequest](../../models/operations/get-mergers-and-acquisitions-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetMergersAndAcquisitionsResponse](../../models/operations/get-mergers-and-acquisitions-response.md)\>**

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