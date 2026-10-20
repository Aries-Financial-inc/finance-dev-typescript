<!-- Start SDK Example Usage [usage] -->
```typescript
import { FinanceDev } from "finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.accounts.getPositions({
    id: "TEST-ACCOUNT-001",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->