# Orders

## Overview

### Available Operations

* [create](#create) - Place an order
* [cancel](#cancel) - Cancel an order
* [preview](#preview) - Preview order
* [replace](#replace) - Replace an order
* [getHistory](#gethistory) - List order history (v2)

## create

Place an equity or option order. The order type is automatically determined:
- No `legs` array = Equity order
- 1 leg in `legs` array = Single-leg option order
- 2-4 legs in `legs` array = Multi-leg option order

Option and multi-leg orders only support `DAY` and `GTC` for `timeInForce`.

If you send an OSI option symbol in `symbol` and omit `legs`, the backend derives a single option leg automatically.

Price precision validation:
- `LIMIT` validates `price`
- `STOP` validates `stopPrice`
- `STOP_LIMIT` validates both
- Decimal inputs support up to 5 digits after the decimal point.

### Example Usage: equityLimit

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="equityLimit" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    price: "150.00",
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    price: "150.00",
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: equityMarket

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="equityMarket" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "MARKET",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "MARKET",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_bad_request

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="nested_bad_request" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: nested_shared_http_error

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="nested_shared_http_error" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: service_unavailable

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="service_unavailable" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: singleLegCall

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="singleLegCall" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
    ],
    price: "5.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
    ],
    price: "5.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: verticalSpread

<!-- UsageSnippet language="typescript" operationID="placeOrder" method="post" path="/v1/orders" example="verticalSpread" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.create({
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "SELL",
        strikePrice: "155.00",
      },
    ],
    price: "2.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCreate } from "finance-dev/funcs/orders-create.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCreate(financeDev, {
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "SELL",
        strikePrice: "155.00",
      },
    ],
    price: "2.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PlaceOrdRequestUnion](../../models/place-ord-request-union.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.OrdResponse](../../models/ord-response.md)\>**

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
| errors.AuthenticationErrorEnvelope | 503, 504                           | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## cancel

Cancel an existing order by original client order ID. For option cancels, you can provide the option fields directly or send an OSI option symbol in `symbol` and let the backend derive the option instrument fields.

### Example Usage: cancelEquity

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="cancelEquity" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    origClOrdId: "ORDER-123456",
    securityType: "CS",
    side: "BUY",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    origClOrdId: "ORDER-123456",
    securityType: "CS",
    side: "BUY",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: cancelOption

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="cancelOption" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-789012",
    putCall: "CALL",
    securityType: "OPT",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-789012",
    putCall: "CALL",
    securityType: "OPT",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: nested_bad_request

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="nested_bad_request" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: nested_shared_http_error

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="nested_shared_http_error" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: service_unavailable

<!-- UsageSnippet language="typescript" operationID="cancelOrder" method="post" path="/v1/orders/cancel" example="service_unavailable" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.cancel({
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersCancel } from "finance-dev/funcs/orders-cancel.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersCancel(financeDev, {
    accountId: "<id>",
    maturity: new Date("2025-01-17"),
    origClOrdId: "ORDER-123456",
    putCall: "CALL",
    securityType: "CS",
    side: "BUY",
    strikePrice: "150.00",
    symbol: "AAPL",
    tradingAccountId: "TEST-ACCOUNT-001",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.CancelOrdRequestUnion](../../models/cancel-ord-request-union.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.CancelOrdResponse](../../models/cancel-ord-response.md)\>**

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
| errors.AuthenticationErrorEnvelope | 503, 504                           | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## preview

Preview an order to calculate estimated cost, fees, buying power impact, and option requirements before placing. Uses the same request body as Place Order (PlaceOrdRequest), including the same option `timeInForce` restrictions, OSI-symbol support, and price-precision validation.

### Example Usage: equityLimit

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="equityLimit" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    price: "150.00",
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    price: "150.00",
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: equityMarket

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="equityMarket" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "MARKET",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "MARKET",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: equityPreview

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="equityPreview" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: multiLegSpread

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="multiLegSpread" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "SELL",
        strikePrice: "155.00",
      },
    ],
    price: "2.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "SELL",
        strikePrice: "155.00",
      },
    ],
    price: "2.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: nested_bad_request

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="nested_bad_request" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: nested_shared_http_error

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="nested_shared_http_error" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: optionOrder

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="optionOrder" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
    ],
    price: "5.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "OPT",
        side: "BUY",
        strikePrice: "150.00",
      },
    ],
    price: "5.50",
    qty: "1",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: optionPreview

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="optionPreview" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```
### Example Usage: service_unavailable

<!-- UsageSnippet language="typescript" operationID="previewOrder" method="post" path="/v1/orders/preview" example="service_unavailable" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.preview({
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersPreview } from "finance-dev/funcs/orders-preview.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersPreview(financeDev, {
    accountId: "<id>",
    clientId: "CLIENT-001",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    price: "150.00",
    qty: "10",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersPreview failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.PlaceOrdRequestUnion](../../models/place-ord-request-union.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.PreviewOrderResponse](../../models/preview-order-response.md)\>**

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
| errors.AuthenticationErrorEnvelope | 503, 504                           | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## replace

Replace/modify an existing order (change quantity, price, or time in force). **ID cycling:** a successful replace returns a new `clOrdId`. Use that new ID as `origClOrdId` for any further replaces of this order — the previous ID is no longer valid once replaced.

For single-leg options, you can send the option fields directly, put them inside the single leg, or send an OSI option symbol in `symbol` and let the backend derive the instrument. Multi-leg replaces must pass `legs` explicitly.

Price precision validation:
- `LIMIT` validates `price`
- `STOP` validates `stopPrice`
- `STOP_LIMIT` validates both
- Decimal inputs support up to 5 digits after the decimal point.

### Example Usage: changePrice

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="changePrice" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "10",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: changeQuantity

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="changeQuantity" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    origClOrdId: "ORDER-123456",
    price: "150.00",
    qty: "20",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    origClOrdId: "ORDER-123456",
    price: "150.00",
    qty: "20",
    side: "BUY",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: flat

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="flat" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: flat_message

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="flat_message" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: flat_string

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="flat_string" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: flat_with_codes

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="flat_with_codes" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: nested

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="nested" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: nested_bad_request

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="nested_bad_request" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: nested_error_object

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="nested_error_object" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: nested_shared_http_error

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="nested_shared_http_error" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```
### Example Usage: service_unavailable

<!-- UsageSnippet language="typescript" operationID="replaceOrder" method="post" path="/v1/orders/replace" example="service_unavailable" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.replace({
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { FinanceDevCore } from "finance-dev/core.js";
import { ordersReplace } from "finance-dev/funcs/orders-replace.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersReplace(financeDev, {
    accountId: "<id>",
    currency: "USD",
    legs: [
      {
        maturity: new Date("2025-01-17"),
        positionEffect: "OPEN",
        putCall: "CALL",
        ratioQty: "1",
        securityType: "CS",
        side: "BUY",
        strikePrice: "150.00",
        symbol: "AAPL",
      },
    ],
    origClOrdId: "ORDER-123456",
    price: "148.50",
    qty: "20",
    side: "BUY",
    stopPrice: "145.00",
    symbol: "AAPL",
    timeInForce: "DAY",
    tradingAccountId: "TEST-ACCOUNT-001",
    type: "LIMIT",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReplace failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [models.ReplaceOrdRequestUnion](../../models/replace-ord-request-union.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ReplaceOrdResponse](../../models/replace-ord-response.md)\>**

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
| errors.AuthenticationErrorEnvelope | 503, 504                           | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |

## getHistory

Date-range query against **PostgreSQL** only (no `source` parameter). `from` is required; `to` defaults to the current time truncated to the minute (UTC). The server caps the window at **90 days**.

Results are ordered and filtered by `order_created_at` (keyset pagination uses the row `id` for correctness). Rows with `SUPERSEDED` status and rows with `failed_flag = true` are excluded.

Set `exclude_today=true` to narrow `to` to just before midnight **America/New_York**, omitting today's activity (already returned by **GET /v2/accounts/{id}/orders**).

**Pagination:** Same opaque `int64` cursor contract as active orders when reading from DB — `cursor=0` first, then `nextCursor`; `0` means exhausted.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listOrderHistory" method="get" path="/v2/accounts/{id}/orders/history" -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.orders.getHistory({
    id: "TEST-ACCOUNT-001",
    from: new Date("2026-01-01T00:00:00Z"),
    to: new Date("2026-01-31T00:00:00Z"),
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
import { ordersGetHistory } from "finance-dev/funcs/orders-get-history.js";

// Use `FinanceDevCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const financeDev = new FinanceDevCore({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const res = await ordersGetHistory(financeDev, {
    id: "TEST-ACCOUNT-001",
    from: new Date("2026-01-01T00:00:00Z"),
    to: new Date("2026-01-31T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ordersGetHistory failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListOrderHistoryRequest](../../models/operations/list-order-history-request.md)                                                                                    | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListOrderHistoryResponse](../../models/operations/list-order-history-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.ErrorResponse               | 400                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 400                                | application/json                   |
| errors.ErrorResponse               | 401                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 401                                | application/json                   |
| errors.ErrorResponse               | 403                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 403                                | application/json                   |
| errors.ErrorResponse               | 404                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 404                                | application/json                   |
| errors.ErrorResponse               | 500                                | application/json                   |
| errors.AuthenticationErrorEnvelope | 500                                | application/json                   |
| errors.PetstoreDefaultError        | 4XX, 5XX                           | \*/\*                              |