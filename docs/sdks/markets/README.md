# Predictions.Markets

## Overview

### Available Operations

* [getElectionMap](#getelectionmap) - Get every race of an election cycle with its candidates' prices

## getElectionMap

Every Senate, House and governor race of the cycle in all 50 states, with each candidate's latest price and 24-hour change, plus the House-control, Senate-majority and balance-of-power markets, in one response. Built for an election map: poll it with `If-None-Match`.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getElectionMap" method="get" path="/v1/predictions/elections/{cycle}/states" -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev();

async function run() {
  const result = await financeDev.predictions.markets.getElectionMap({
    cycle: 2026,
    state: "TX",
    office: "senate,house",
    raceType: "general,special",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "@ariesdotcom/finance-dev/core.js";
import { predictionsMarketsGetElectionMap } from "@ariesdotcom/finance-dev/funcs/predictions-markets-get-election-map.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore();

async function run() {
  const res = await predictionsMarketsGetElectionMap(financeDev, {
    cycle: 2026,
    state: "TX",
    office: "senate,house",
    raceType: "general,special",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("predictionsMarketsGetElectionMap failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetElectionMapRequest](../../models/operations/get-election-map-request.md)                                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetElectionMapResponse](../../models/operations/get-election-map-response.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.ErrorEnvelope        | 400, 404                    | application/json            |
| errors.ErrorEnvelope        | 500                         | application/json            |
| errors.PetstoreDefaultError | 4XX, 5XX                    | \*/\*                       |