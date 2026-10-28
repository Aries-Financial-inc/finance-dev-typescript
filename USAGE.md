<!-- Start SDK Example Usage [usage] -->
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

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
## WebSocket streams

Use `sdk.websocket.market`, `sdk.websocket.chart`, or `sdk.websocket.account`.
See [the WebSocket guide](docs/websocket/README.md) for authentication,
subscriptions, async iteration, reconnect behavior, and cleanup.

## Development and tests

```sh
npm ci
npm run lint
npm test
```

Use Node.js 22+ and Go 1.26.0+ for the test suite. `npm test` builds the SDK,
runs local websocket integration tests, then runs the Speakeasy-generated REST
contract tests against an automatically started Go mock server. No API
credentials are needed. Run `npm run test:websocket` after building, or
`npm run test:generated` independently. Set `TEST_SERVER_URL` to use an existing
contract mock server instead of starting one.

Persistent edits are enabled in `.speakeasy/gen.yaml`. The custom websocket
implementation lives in `src/websocket`; the generated SDK has a small lazy
`websocket` getter and package exports. Keep `.speakeasy/gen.lock` and the
persistent-edit Git history when regenerating. From an established Git checkout,
run `speakeasy run --output console --skip-versioning --skip-upload-spec`, then
`npm test` to verify that customizations survive. Speakeasy's mock-server
Staticcheck currently requires a compatible Go toolchain; use
`GOTOOLCHAIN=go1.26.0` for regeneration if a newer Go version causes export-data
errors. Two watchlist workflows in `.speakeasy/tests.arazzo.yaml` use explicit
field assertions; hand-maintained regressions in `tests/generated` verify empty
arrays because the generator omits empty-array expected literals. The
`FinanceDev.options` compatibility getter delegates to the generated `options$`
group used by the current SDK generator.
