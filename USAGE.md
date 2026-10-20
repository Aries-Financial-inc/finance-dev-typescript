<!-- Start SDK Example Usage [usage] -->
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
<!-- End SDK Example Usage [usage] -->