# finance-dev

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *finance-dev* API.

<!-- Start Summary [summary] -->
## Summary

Aries API — OpenAPI Specification: OpenAPI Specification for the Aries trading platform API.

# Authentication

Learn how to authenticate with the Aries API using OAuth2 and manage access tokens in your SDK.

## Overview

The Aries API uses **OAuth2 with Bearer tokens** (JWT format) for authentication. All API requests require a valid access token in the `Authorization` header:

```
Authorization: Bearer <access_token>
```

## Providing Client ID and Client Secret (SDK)

When using the generated SDK, provide your **Client ID** and **Client Secret** when you create the API client (e.g. in the constructor or security options). The SDK will use these to obtain and refresh the access token internally; you do not need to manage tokens yourself.

Obtain your OAuth2 credentials from the Aries platform (e.g. Client Center / Manage Account at https://app.aries.com):

- **Client ID** – Your application identifier (pass to SDK client)
- **Client Secret** – Your application secret key (pass to SDK client; use PKCE for public clients where secret cannot be stored)

## Authentication Flow

### 1. Authorization Code Flow

For server-side or confidential clients:

1. **Redirect the user** to the authorization URL to sign in and consent:
 - **URL:** `https://app.aries.com/oauth2/authorize`
 - **Query params:** `response_type=code`, `client_id`, `redirect_uri`, `scope`, `state`

2. **Exchange the code for tokens** (after user is redirected back with `?code=.`):
 - **POST** `https://api.aries.com/v1/oauth2/token`
 - **Body:** `grant_type=authorization_code`, `code`, `redirect_uri`, `client_id`, `client_secret`
 - Response includes `access_token` and `refresh_token`

3. **Call the API** with the access token: `Authorization: Bearer <access_token>`

### 2. PKCE Flow

For SPAs and mobile apps (public clients that cannot store `client_secret`):

1. Generate a **code_verifier** (random string) and **code_challenge** = BASE64URL(SHA256(code_verifier)).
2. **Redirect the user** to `https://app.aries.com/oauth2/authorize` with `code_challenge`, `code_challenge_method=S256`, plus `client_id`, `redirect_uri`, `scope`, `state`.
3. **Exchange the code** at POST `https://api.aries.com/v1/oauth2/token` with `grant_type=authorization_code`, `code`, `redirect_uri`, `client_id`, `code_verifier` (no client_secret).
4. Use the returned `access_token` as Bearer.

### 3. MFA Verification

If the user has MFA enabled, the authorize step may return `is_mfa: true` and a `next_step_auth_id`. Call **POST** `https://api.aries.com/v1/oauth2/authorize/mfa` with `next_step_auth_id` and `verification_code` (6-digit code). Then continue with **POST** `/v1/oauth2/authorize/confirm` to get the authorization code, and exchange it at `/v1/oauth2/token`.

## Token Management

- **Refresh when expired:** POST `https://api.aries.com/v1/oauth2/token` with `grant_type=refresh_token`, `client_id`, `client_secret`, `refresh_token`.
- **Using a Bearer token directly:** If you already have an access token, set the header `Authorization: Bearer <access_token>` on every request. The SDK can accept a pre-obtained token and use it until it expires.

## OAuth2 Scopes

Request only the scopes your application needs. Available scopes:

| Scope | Description |
|-------|-------------|
| `user:information` | View user profile and personal details |
| `watchlist:information` | View your watchlists and their symbols |
| `watchlist:management` | Create, update, replace, and delete your watchlists |
| `account:information` | View account balances, positions, and transaction history |
| `order:execution` | Place, modify, and cancel orders |
| `order:information` | View order history and status |
| `position:information` | View current positions and holdings |
| `market:information` | Access live and historical market data |
| `calendar:information` | Access earnings, economic, and market schedule data |
| `options:information` | Access options chains and expiration data |
| `analytics:information` | View analytics, ratings, and market insights |
| `market:supplemental` | News, company profiles, financials, filings, ETF data, technical analysis |

Specify multiple scopes as a space-separated string, e.g. `account:information order:execution market:information`.

## Security Best Practices

- **Store credentials securely** – Use environment variables or a secrets manager for `client_id` and `client_secret`. Never hardcode them.
- **Handle token expiration** – Check for 401 responses and refresh the token using the refresh_token, then retry the request.
- **Use HTTPS** – All authorization and token endpoints must be called over HTTPS.
- **Validate state** – When using the authorization code flow, validate the `state` parameter on the callback to prevent CSRF.

## Error Handling

- **400 Bad Request** – Invalid or missing parameters, validation failures, or malformed JSON. Response bodies follow the same patterns as other errors (flat `error` string, optional `codes`, nested `error` object, or rarely no body).

- **401 Unauthorized** – Invalid or expired access token; refresh the token or re-authenticate. JSON bodies are not identical on every route: you may see a flat `error` string (sometimes with `codes`), a nested `error` object (`type`, `code`, `message`), or rarely an empty body

- **403 Forbidden** – Insufficient scope or permissions for the requested resource. Error JSON may be flat or nested, like 400/401.

- **404 Not Found** – Resource does not exist or is not visible. Error JSON may be flat or nested.

- **500 / 5xx** – Server or upstream failure; retry with backoff. Do not depend on a single error JSON shape; some responses may have no body.


---

Endpoints in this spec: health, OAuth2 (authorize, confirm, mfa, token), users, accounts, orders, market data, watchlist, chart, analytics, calendars, company, economy, financials, indices, options, news, and supplemental data.
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [finance-dev](#finance-dev)
* [Authentication](#authentication)
  * [Overview](#overview)
  * [Providing Client ID and Client Secret (SDK)](#providing-client-id-and-client-secret-sdk)
  * [Authentication Flow](#authentication-flow)
  * [Token Management](#token-management)
  * [OAuth2 Scopes](#oauth2-scopes)
  * [Security Best Practices](#security-best-practices)
  * [Error Handling](#error-handling)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication-1)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling-1)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)
  * [WebSocket streams](#websocket-streams)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @ariesdotcom/finance-dev
```

### PNPM

```bash
pnpm add @ariesdotcom/finance-dev
```

### Bun

```bash
bun add @ariesdotcom/finance-dev
```

### Yarn

```bash
yarn add @ariesdotcom/finance-dev
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import("@ariesdotcom/finance-dev")` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

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

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                                         | Type   | Scheme                         |
| -------------------------------------------- | ------ | ------------------------------ |
| `clientID`<br/>`clientSecret`<br/>`tokenURL` | oauth2 | OAuth2 Client Credentials Flow |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Accounts](docs/sdks/accounts/README.md)

* [getPositions](docs/sdks/accounts/README.md#getpositions) - Get Account Positions
* [getBalance](docs/sdks/accounts/README.md#getbalance) - Get Account Balance

#### [Accounts.Orders](docs/sdks/accountsorders/README.md)

* [listActive](docs/sdks/accountsorders/README.md#listactive) - List active orders (v2)

### [Analytics](docs/sdks/analytics/README.md)

* [getInsights](docs/sdks/analytics/README.md#getinsights) - Get Analyst Insights
* [getMarketBreadth](docs/sdks/analytics/README.md#getmarketbreadth) - Get Market Breadth
* [getNetInflow](docs/sdks/analytics/README.md#getnetinflow) - Get Net Inflow
* [get](docs/sdks/analytics/README.md#get) - Get Analyst Ratings
* [getSectorTickers](docs/sdks/analytics/README.md#getsectortickers) - Get Sector Tickers
* [getSectorWiseChange](docs/sdks/analytics/README.md#getsectorwisechange) - Get Sector-wise Change
* [getTopGainers](docs/sdks/analytics/README.md#gettopgainers) - Get Top Gaining Stocks
* [getTopLosers](docs/sdks/analytics/README.md#gettoplosers) - Get Top Losing Stocks
* [getOptionsEtfsTopVolume](docs/sdks/analytics/README.md#getoptionsetfstopvolume) - Get Top ETF Options by Volume
* [getOptionsStocksTopGainers](docs/sdks/analytics/README.md#getoptionsstockstopgainers) - Get Top Stock Options by Gains
* [getOptionsStocksTopVolume](docs/sdks/analytics/README.md#getoptionsstockstopvolume) - Get Top Stock Options by Volume
* [stockScreener](docs/sdks/analytics/README.md#stockscreener) - Stock Screener

#### [Analytics.TopMostActive](docs/sdks/topmostactive/README.md)

* [list](docs/sdks/topmostactive/README.md#list) - Get Most Active Stocks

### [Calendar](docs/sdks/calendar/README.md)

* [getConferenceCalls](docs/sdks/calendar/README.md#getconferencecalls) - Get Conference Calls
* [getEarnings](docs/sdks/calendar/README.md#getearnings) - Get Earnings Calendar
* [getEconomics](docs/sdks/calendar/README.md#geteconomics) - Get Economics Calendar
* [getHistoricalData](docs/sdks/calendar/README.md#gethistoricaldata) - Get Historical Economic Data
* [getMergersAndAcquisitions](docs/sdks/calendar/README.md#getmergersandacquisitions) - Get Mergers & Acquisitions

### [Chart](docs/sdks/chart/README.md)

* [getConfig](docs/sdks/chart/README.md#getconfig) - Get Chart Configuration
* [getHistory](docs/sdks/chart/README.md#gethistory) - Get Historical Chart Data
* [getQuotes](docs/sdks/chart/README.md#getquotes) - Get Real-Time Quotes
* [searchSymbols](docs/sdks/chart/README.md#searchsymbols) - Search Symbols
* [getSymbols](docs/sdks/chart/README.md#getsymbols) - Get Symbol Information
* [getTickHistory](docs/sdks/chart/README.md#gettickhistory) - Get Tick-Based Chart Data
* [getTime](docs/sdks/chart/README.md#gettime) - Get Server Time

### [Company](docs/sdks/company/README.md)

* [getExecutive](docs/sdks/company/README.md#getexecutive) - Get Company Executives
* [getFinancialMetrics](docs/sdks/company/README.md#getfinancialmetrics) - Get Company Financial Metrics
* [getPeers](docs/sdks/company/README.md#getpeers) - Get Company Peers
* [getProfile](docs/sdks/company/README.md#getprofile) - Get Company Profile

### [CorporateActions](docs/sdks/corporateactions/README.md)

* [getDividends](docs/sdks/corporateactions/README.md#getdividends) - Get Dividend History
* [getIpoCalendar](docs/sdks/corporateactions/README.md#getipocalendar) - Get IPO Calendar
* [getSpinoffs](docs/sdks/corporateactions/README.md#getspinoffs) - Get Corporate Spinoffs
* [getTenderOffers](docs/sdks/corporateactions/README.md#gettenderoffers) - Get Tender Offers
* [getStockSplit](docs/sdks/corporateactions/README.md#getstocksplit) - Get Stock Split History

### [Economy](docs/sdks/economy/README.md)

* [getInflation](docs/sdks/economy/README.md#getinflation) - Get Latest Inflation Data
* [getInflationExpectations](docs/sdks/economy/README.md#getinflationexpectations) - Get Latest Inflation Expectations
* [getTreasuryYields](docs/sdks/economy/README.md#gettreasuryyields) - Get Latest Treasury Yields

### [Etf](docs/sdks/etf/README.md)

* [getHoldings](docs/sdks/etf/README.md#getholdings) - Get ETF Holdings
* [getProfile](docs/sdks/etf/README.md#getprofile) - Get ETF Profile
* [getSector](docs/sdks/etf/README.md#getsector) - Get ETF Sector Allocation

### [Etfs](docs/sdks/etfs/README.md)

* [getCountryAllocation](docs/sdks/etfs/README.md#getcountryallocation) - Get ETF Country Allocation

### [Filings](docs/sdks/filings/README.md)

* [getSec](docs/sdks/filings/README.md#getsec) - Get SEC Filings
* [getSimilarityIndex](docs/sdks/filings/README.md#getsimilarityindex) - Get Filings Similarity Index

### [Financials](docs/sdks/financials/README.md)

* [getIncomeStatements](docs/sdks/financials/README.md#getincomestatements) - Get Income Statements
* [getRatios](docs/sdks/financials/README.md#getratios) - Get Financial Ratios
* [getReported](docs/sdks/financials/README.md#getreported) - Get Reported Financials
* [getRevenueBreakdown](docs/sdks/financials/README.md#getrevenuebreakdown) - Get Revenue Breakdown
* [getShortInterest](docs/sdks/financials/README.md#getshortinterest) - Get Short Interest Data
* [getShortVolume](docs/sdks/financials/README.md#getshortvolume) - Get Short Volume Data
* [getStatements](docs/sdks/financials/README.md#getstatements) - Get Financial Statements

#### [Financials.CashFlowStatements](docs/sdks/cashflowstatements/README.md)

* [get](docs/sdks/cashflowstatements/README.md#get) - Get Cash Flow Statements

### [Indices](docs/sdks/indices/README.md)

* [getBar](docs/sdks/indices/README.md#getbar) - Get Index Bar Data
* [getBars](docs/sdks/indices/README.md#getbars) - Get Index Bars Data
* [getByGroup](docs/sdks/indices/README.md#getbygroup) - Get Indices By Group
* [getChartBars](docs/sdks/indices/README.md#getchartbars) - Get Index Chart Data
* [getGroups](docs/sdks/indices/README.md#getgroups) - Get Index Groups
* [list](docs/sdks/indices/README.md#list) - Get Index List
* [getRealtimeValues](docs/sdks/indices/README.md#getrealtimevalues) - Get Realtime Indices Values
* [search](docs/sdks/indices/README.md#search) - Search Indices

### [Logos](docs/sdks/logos/README.md)

* [search](docs/sdks/logos/README.md#search) - Search Company Logos
* [sync](docs/sdks/logos/README.md#sync) - Sync Company Logos

### [Market](docs/sdks/market/README.md)

* [getEtbList](docs/sdks/market/README.md#getetblist) - Get Easy-to-Borrow List
* [searchEtbSymbols](docs/sdks/market/README.md#searchetbsymbols) - Search Easy-to-Borrow Symbols
* [getHolidays](docs/sdks/market/README.md#getholidays) - Get Market Holidays
* [getStatus](docs/sdks/market/README.md#getstatus) - Get Market Status
* [getOptionDetails](docs/sdks/market/README.md#getoptiondetails) - Get option details

#### [Market.Equities](docs/sdks/equities/README.md)

* [getDetails](docs/sdks/equities/README.md#getdetails) - Get equity details

### [MarketData](docs/sdks/marketdata/README.md)

* [searchSymbols](docs/sdks/marketdata/README.md#searchsymbols) - Search Symbols

### [News](docs/sdks/news/README.md)

* [list](docs/sdks/news/README.md#list) - Get Market News
* [getSentiment](docs/sdks/news/README.md#getsentiment) - Get News Sentiment
* [getById](docs/sdks/news/README.md#getbyid) - Get News by ID

### [Options](docs/sdks/options/README.md)

* [getActivity](docs/sdks/options/README.md#getactivity) - Get Options Activity
* [getLastTrade](docs/sdks/options/README.md#getlasttrade) - Get Options Last Trade
* [getOpenCloseData](docs/sdks/options/README.md#getopenclosedata) - Get Option Open/Close Data
* [getPreviousDay](docs/sdks/options/README.md#getpreviousday) - Get Previous Day Option Data
* [getQuotes](docs/sdks/options/README.md#getquotes) - Get Options Quotes
* [getChainSnapshot](docs/sdks/options/README.md#getchainsnapshot) - Get option chain snapshot
* [getSnapshot](docs/sdks/options/README.md#getsnapshot) - Get option contract snapshot
* [getTrades](docs/sdks/options/README.md#gettrades) - Get Options Trades
* [getUnusualActivity](docs/sdks/options/README.md#getunusualactivity) - Get Options Unusual Activity by Symbol
* [getContracts](docs/sdks/options/README.md#getcontracts) - Get Options Contract Symbols
* [getExpiryDates](docs/sdks/options/README.md#getexpirydates) - Get Options Expiry Dates

### [Orders](docs/sdks/orders/README.md)

* [create](docs/sdks/orders/README.md#create) - Place an order
* [cancel](docs/sdks/orders/README.md#cancel) - Cancel an order
* [preview](docs/sdks/orders/README.md#preview) - Preview order
* [replace](docs/sdks/orders/README.md#replace) - Replace an order
* [getHistory](docs/sdks/orders/README.md#gethistory) - List order history (v2)

### [Ownership](docs/sdks/ownership/README.md)

* [getInstitutional](docs/sdks/ownership/README.md#getinstitutional) - Get Institutional Ownership
* [getPortfolio](docs/sdks/ownership/README.md#getportfolio) - Get Institutional Portfolio
* [getData](docs/sdks/ownership/README.md#getdata) - Get Company Ownership Data
* [getFundData](docs/sdks/ownership/README.md#getfunddata) - Get Fund Ownership Data
* [getInsiderTransactions](docs/sdks/ownership/README.md#getinsidertransactions) - Get Insider Transactions

### [PredictionMarketCategories](docs/sdks/predictionmarketcategories/README.md)

* [list](docs/sdks/predictionmarketcategories/README.md#list) - List prediction market categories

### [PredictionOrders](docs/sdks/predictionorders/README.md)

* [create](docs/sdks/predictionorders/README.md#create) - Place prediction order

### [Predictions](docs/sdks/predictions/README.md)

* [getHistoryBatch](docs/sdks/predictions/README.md#gethistorybatch) - Batch historical ticks for up to 5 symbols
* [listOrders](docs/sdks/predictions/README.md#listorders) - List prediction orders

#### [Predictions.History](docs/sdks/history/README.md)

* [get](docs/sdks/history/README.md#get) - Get historical ticks for a single symbol

#### [Predictions.Markets](docs/sdks/markets/README.md)

* [getBaseEvent](docs/sdks/markets/README.md#getbaseevent) - Get a base event with its events and each event's contracts
* [getEventContracts](docs/sdks/markets/README.md#geteventcontracts) - Get an event and all contracts under it
* [search](docs/sdks/markets/README.md#search) - Search contracts, events or base events

#### [Predictions.Orders](docs/sdks/predictionsorders/README.md)

* [get](docs/sdks/predictionsorders/README.md#get) - Get prediction order

### [Signals](docs/sdks/signals/README.md)

* [getBullBear](docs/sdks/signals/README.md#getbullbear) - Get Bull & Bear Analysis

### [StockAlternative](docs/sdks/stockalternative/README.md)

* [getBankBranch](docs/sdks/stockalternative/README.md#getbankbranch) - Get Bank Branch
* [getCongressionalTrading](docs/sdks/stockalternative/README.md#getcongressionaltrading) - Get Congressional Trading
* [getCovid19US](docs/sdks/stockalternative/README.md#getcovid19us) - Get COVID-19 US
* [getEarningsCallLive](docs/sdks/stockalternative/README.md#getearningscalllive) - Get Earnings Call Live
* [getEarningsQualityScore](docs/sdks/stockalternative/README.md#getearningsqualityscore) - Get Earnings Quality Score
* [getEsg](docs/sdks/stockalternative/README.md#getesg) - Get Company ESG
* [getFDAAdvisoryCommitteeCalendar](docs/sdks/stockalternative/README.md#getfdaadvisorycommitteecalendar) - Get FDA Advisory Committee Calendar
* [getHistoricalESG](docs/sdks/stockalternative/README.md#gethistoricalesg) - Get Historical ESG
* [getInvestmentTheme](docs/sdks/stockalternative/README.md#getinvestmenttheme) - Get Investment Theme
* [getPresentation](docs/sdks/stockalternative/README.md#getpresentation) - Get Company Presentation
* [getSocialSentiment](docs/sdks/stockalternative/README.md#getsocialsentiment) - Get Social Sentiment
* [getSupplyChain](docs/sdks/stockalternative/README.md#getsupplychain) - Get Supply Chain
* [getTranscriptsList](docs/sdks/stockalternative/README.md#gettranscriptslist) - Get Transcripts List
* [getUsaSpending](docs/sdks/stockalternative/README.md#getusaspending) - Get USA Spending
* [getUsptoPatent](docs/sdks/stockalternative/README.md#getusptopatent) - Get USPTO Patent
* [getVisaApplication](docs/sdks/stockalternative/README.md#getvisaapplication) - Get Visa Application (H1-B)

### [StockAlternatives](docs/sdks/stockalternatives/README.md)

* [getLobbying](docs/sdks/stockalternatives/README.md#getlobbying) - Get Lobbying
* [getTranscripts](docs/sdks/stockalternatives/README.md#gettranscripts) - Get Transcript by ID

### [StockEstimates](docs/sdks/stockestimates/README.md)

* [getEarnings](docs/sdks/stockestimates/README.md#getearnings) - Get Earnings Surprises
* [getEBITEstimate](docs/sdks/stockestimates/README.md#getebitestimate) - Get EBIT Estimates
* [getEbitdaEstimate](docs/sdks/stockestimates/README.md#getebitdaestimate) - Get EBITDA Estimates
* [getEpsEstimate](docs/sdks/stockestimates/README.md#getepsestimate) - Get EPS Estimates
* [getPriceTarget](docs/sdks/stockestimates/README.md#getpricetarget) - Get Analyst Price Targets
* [getRevenueEstimate](docs/sdks/stockestimates/README.md#getrevenueestimate) - Get Revenue Estimates
* [getUpgradeDowngrade](docs/sdks/stockestimates/README.md#getupgradedowngrade) - Get Analyst Upgrades & Downgrades

### [Stocks](docs/sdks/stocks/README.md)

* [getAggregates](docs/sdks/stocks/README.md#getaggregates) - Get Aggregate Bars
* [getDailySummary](docs/sdks/stocks/README.md#getdailysummary) - Get Daily Market Summary
* [getLastQuote](docs/sdks/stocks/README.md#getlastquote) - Get Last Quote (NBBO)
* [getLastTrade](docs/sdks/stocks/README.md#getlasttrade) - Get Last Trade
* [getOpenClose](docs/sdks/stocks/README.md#getopenclose) - Get Daily Ticker Summary
* [getPrevDay](docs/sdks/stocks/README.md#getprevday) - Get Previous Day Bar
* [getQuotes](docs/sdks/stocks/README.md#getquotes) - Get Stock Quotes (NBBO)
* [getSnapshot](docs/sdks/stocks/README.md#getsnapshot) - Get Full Market Snapshot
* [getTrades](docs/sdks/stocks/README.md#gettrades) - Get Stock Trades
* [getUnifiedSnapshot](docs/sdks/stocks/README.md#getunifiedsnapshot) - Get Unified Snapshot

### [TechnicalAnalysis](docs/sdks/technicalanalysis/README.md)

* [getIndicator](docs/sdks/technicalanalysis/README.md#getindicator) - Get Technical Indicator Data
* [getPattern](docs/sdks/technicalanalysis/README.md#getpattern) - Get Technical Patterns
* [getSupportResistance](docs/sdks/technicalanalysis/README.md#getsupportresistance) - Get Support & Resistance Levels
* [getTechnicalIndicator](docs/sdks/technicalanalysis/README.md#gettechnicalindicator) - Get Aggregate Technical Indicators

### [Users.Accounts](docs/sdks/usersaccounts/README.md)

* [list](docs/sdks/usersaccounts/README.md#list) - Get User Accounts

### [Watchlist](docs/sdks/watchlist/README.md)

* [delete](docs/sdks/watchlist/README.md#delete) - Delete Watchlist

### [Watchlists](docs/sdks/watchlists/README.md)

* [list](docs/sdks/watchlists/README.md#list) - List Watchlists
* [create](docs/sdks/watchlists/README.md#create) - Create Watchlist
* [replaceAll](docs/sdks/watchlists/README.md#replaceall) - Replace All Watchlists
* [get](docs/sdks/watchlists/README.md#get) - Get Watchlist
* [update](docs/sdks/watchlists/README.md#update) - Update Watchlist

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accountsGetBalance`](docs/sdks/accounts/README.md#getbalance) - Get Account Balance
- [`accountsGetPositions`](docs/sdks/accounts/README.md#getpositions) - Get Account Positions
- [`accountsOrdersListActive`](docs/sdks/accountsorders/README.md#listactive) - List active orders (v2)
- [`analyticsGet`](docs/sdks/analytics/README.md#get) - Get Analyst Ratings
- [`analyticsGetInsights`](docs/sdks/analytics/README.md#getinsights) - Get Analyst Insights
- [`analyticsGetMarketBreadth`](docs/sdks/analytics/README.md#getmarketbreadth) - Get Market Breadth
- [`analyticsGetNetInflow`](docs/sdks/analytics/README.md#getnetinflow) - Get Net Inflow
- [`analyticsGetOptionsEtfsTopVolume`](docs/sdks/analytics/README.md#getoptionsetfstopvolume) - Get Top ETF Options by Volume
- [`analyticsGetOptionsStocksTopGainers`](docs/sdks/analytics/README.md#getoptionsstockstopgainers) - Get Top Stock Options by Gains
- [`analyticsGetOptionsStocksTopVolume`](docs/sdks/analytics/README.md#getoptionsstockstopvolume) - Get Top Stock Options by Volume
- [`analyticsGetSectorTickers`](docs/sdks/analytics/README.md#getsectortickers) - Get Sector Tickers
- [`analyticsGetSectorWiseChange`](docs/sdks/analytics/README.md#getsectorwisechange) - Get Sector-wise Change
- [`analyticsGetTopGainers`](docs/sdks/analytics/README.md#gettopgainers) - Get Top Gaining Stocks
- [`analyticsGetTopLosers`](docs/sdks/analytics/README.md#gettoplosers) - Get Top Losing Stocks
- [`analyticsStockScreener`](docs/sdks/analytics/README.md#stockscreener) - Stock Screener
- [`analyticsTopMostActiveList`](docs/sdks/topmostactive/README.md#list) - Get Most Active Stocks
- [`calendarGetConferenceCalls`](docs/sdks/calendar/README.md#getconferencecalls) - Get Conference Calls
- [`calendarGetEarnings`](docs/sdks/calendar/README.md#getearnings) - Get Earnings Calendar
- [`calendarGetEconomics`](docs/sdks/calendar/README.md#geteconomics) - Get Economics Calendar
- [`calendarGetHistoricalData`](docs/sdks/calendar/README.md#gethistoricaldata) - Get Historical Economic Data
- [`calendarGetMergersAndAcquisitions`](docs/sdks/calendar/README.md#getmergersandacquisitions) - Get Mergers & Acquisitions
- [`chartGetConfig`](docs/sdks/chart/README.md#getconfig) - Get Chart Configuration
- [`chartGetHistory`](docs/sdks/chart/README.md#gethistory) - Get Historical Chart Data
- [`chartGetQuotes`](docs/sdks/chart/README.md#getquotes) - Get Real-Time Quotes
- [`chartGetSymbols`](docs/sdks/chart/README.md#getsymbols) - Get Symbol Information
- [`chartGetTickHistory`](docs/sdks/chart/README.md#gettickhistory) - Get Tick-Based Chart Data
- [`chartGetTime`](docs/sdks/chart/README.md#gettime) - Get Server Time
- [`chartSearchSymbols`](docs/sdks/chart/README.md#searchsymbols) - Search Symbols
- [`companyGetExecutive`](docs/sdks/company/README.md#getexecutive) - Get Company Executives
- [`companyGetFinancialMetrics`](docs/sdks/company/README.md#getfinancialmetrics) - Get Company Financial Metrics
- [`companyGetPeers`](docs/sdks/company/README.md#getpeers) - Get Company Peers
- [`companyGetProfile`](docs/sdks/company/README.md#getprofile) - Get Company Profile
- [`corporateActionsGetDividends`](docs/sdks/corporateactions/README.md#getdividends) - Get Dividend History
- [`corporateActionsGetIpoCalendar`](docs/sdks/corporateactions/README.md#getipocalendar) - Get IPO Calendar
- [`corporateActionsGetSpinoffs`](docs/sdks/corporateactions/README.md#getspinoffs) - Get Corporate Spinoffs
- [`corporateActionsGetStockSplit`](docs/sdks/corporateactions/README.md#getstocksplit) - Get Stock Split History
- [`corporateActionsGetTenderOffers`](docs/sdks/corporateactions/README.md#gettenderoffers) - Get Tender Offers
- [`economyGetInflation`](docs/sdks/economy/README.md#getinflation) - Get Latest Inflation Data
- [`economyGetInflationExpectations`](docs/sdks/economy/README.md#getinflationexpectations) - Get Latest Inflation Expectations
- [`economyGetTreasuryYields`](docs/sdks/economy/README.md#gettreasuryyields) - Get Latest Treasury Yields
- [`etfGetHoldings`](docs/sdks/etf/README.md#getholdings) - Get ETF Holdings
- [`etfGetProfile`](docs/sdks/etf/README.md#getprofile) - Get ETF Profile
- [`etfGetSector`](docs/sdks/etf/README.md#getsector) - Get ETF Sector Allocation
- [`etfsGetCountryAllocation`](docs/sdks/etfs/README.md#getcountryallocation) - Get ETF Country Allocation
- [`filingsGetSec`](docs/sdks/filings/README.md#getsec) - Get SEC Filings
- [`filingsGetSimilarityIndex`](docs/sdks/filings/README.md#getsimilarityindex) - Get Filings Similarity Index
- [`financialsCashFlowStatementsGet`](docs/sdks/cashflowstatements/README.md#get) - Get Cash Flow Statements
- [`financialsGetIncomeStatements`](docs/sdks/financials/README.md#getincomestatements) - Get Income Statements
- [`financialsGetRatios`](docs/sdks/financials/README.md#getratios) - Get Financial Ratios
- [`financialsGetReported`](docs/sdks/financials/README.md#getreported) - Get Reported Financials
- [`financialsGetRevenueBreakdown`](docs/sdks/financials/README.md#getrevenuebreakdown) - Get Revenue Breakdown
- [`financialsGetShortInterest`](docs/sdks/financials/README.md#getshortinterest) - Get Short Interest Data
- [`financialsGetShortVolume`](docs/sdks/financials/README.md#getshortvolume) - Get Short Volume Data
- [`financialsGetStatements`](docs/sdks/financials/README.md#getstatements) - Get Financial Statements
- [`indicesGetBar`](docs/sdks/indices/README.md#getbar) - Get Index Bar Data
- [`indicesGetBars`](docs/sdks/indices/README.md#getbars) - Get Index Bars Data
- [`indicesGetByGroup`](docs/sdks/indices/README.md#getbygroup) - Get Indices By Group
- [`indicesGetChartBars`](docs/sdks/indices/README.md#getchartbars) - Get Index Chart Data
- [`indicesGetGroups`](docs/sdks/indices/README.md#getgroups) - Get Index Groups
- [`indicesGetRealtimeValues`](docs/sdks/indices/README.md#getrealtimevalues) - Get Realtime Indices Values
- [`indicesList`](docs/sdks/indices/README.md#list) - Get Index List
- [`indicesSearch`](docs/sdks/indices/README.md#search) - Search Indices
- [`logosSearch`](docs/sdks/logos/README.md#search) - Search Company Logos
- [`logosSync`](docs/sdks/logos/README.md#sync) - Sync Company Logos
- [`marketDataSearchSymbols`](docs/sdks/marketdata/README.md#searchsymbols) - Search Symbols
- [`marketEquitiesGetDetails`](docs/sdks/equities/README.md#getdetails) - Get equity details
- [`marketGetEtbList`](docs/sdks/market/README.md#getetblist) - Get Easy-to-Borrow List
- [`marketGetHolidays`](docs/sdks/market/README.md#getholidays) - Get Market Holidays
- [`marketGetOptionDetails`](docs/sdks/market/README.md#getoptiondetails) - Get option details
- [`marketGetStatus`](docs/sdks/market/README.md#getstatus) - Get Market Status
- [`marketSearchEtbSymbols`](docs/sdks/market/README.md#searchetbsymbols) - Search Easy-to-Borrow Symbols
- [`newsGetById`](docs/sdks/news/README.md#getbyid) - Get News by ID
- [`newsGetSentiment`](docs/sdks/news/README.md#getsentiment) - Get News Sentiment
- [`newsList`](docs/sdks/news/README.md#list) - Get Market News
- [`optionsGetActivity`](docs/sdks/options/README.md#getactivity) - Get Options Activity
- [`optionsGetChainSnapshot`](docs/sdks/options/README.md#getchainsnapshot) - Get option chain snapshot
- [`optionsGetContracts`](docs/sdks/options/README.md#getcontracts) - Get Options Contract Symbols
- [`optionsGetExpiryDates`](docs/sdks/options/README.md#getexpirydates) - Get Options Expiry Dates
- [`optionsGetLastTrade`](docs/sdks/options/README.md#getlasttrade) - Get Options Last Trade
- [`optionsGetOpenCloseData`](docs/sdks/options/README.md#getopenclosedata) - Get Option Open/Close Data
- [`optionsGetPreviousDay`](docs/sdks/options/README.md#getpreviousday) - Get Previous Day Option Data
- [`optionsGetQuotes`](docs/sdks/options/README.md#getquotes) - Get Options Quotes
- [`optionsGetSnapshot`](docs/sdks/options/README.md#getsnapshot) - Get option contract snapshot
- [`optionsGetTrades`](docs/sdks/options/README.md#gettrades) - Get Options Trades
- [`optionsGetUnusualActivity`](docs/sdks/options/README.md#getunusualactivity) - Get Options Unusual Activity by Symbol
- [`ordersCancel`](docs/sdks/orders/README.md#cancel) - Cancel an order
- [`ordersCreate`](docs/sdks/orders/README.md#create) - Place an order
- [`ordersGetHistory`](docs/sdks/orders/README.md#gethistory) - List order history (v2)
- [`ordersPreview`](docs/sdks/orders/README.md#preview) - Preview order
- [`ordersReplace`](docs/sdks/orders/README.md#replace) - Replace an order
- [`ownershipGetData`](docs/sdks/ownership/README.md#getdata) - Get Company Ownership Data
- [`ownershipGetFundData`](docs/sdks/ownership/README.md#getfunddata) - Get Fund Ownership Data
- [`ownershipGetInsiderTransactions`](docs/sdks/ownership/README.md#getinsidertransactions) - Get Insider Transactions
- [`ownershipGetInstitutional`](docs/sdks/ownership/README.md#getinstitutional) - Get Institutional Ownership
- [`ownershipGetPortfolio`](docs/sdks/ownership/README.md#getportfolio) - Get Institutional Portfolio
- [`predictionMarketCategoriesList`](docs/sdks/predictionmarketcategories/README.md#list) - List prediction market categories
- [`predictionOrdersCreate`](docs/sdks/predictionorders/README.md#create) - Place prediction order
- [`predictionsGetHistoryBatch`](docs/sdks/predictions/README.md#gethistorybatch) - Batch historical ticks for up to 5 symbols
- [`predictionsHistoryGet`](docs/sdks/history/README.md#get) - Get historical ticks for a single symbol
- [`predictionsListOrders`](docs/sdks/predictions/README.md#listorders) - List prediction orders
- [`predictionsMarketsGetBaseEvent`](docs/sdks/markets/README.md#getbaseevent) - Get a base event with its events and each event's contracts
- [`predictionsMarketsGetEventContracts`](docs/sdks/markets/README.md#geteventcontracts) - Get an event and all contracts under it
- [`predictionsMarketsSearch`](docs/sdks/markets/README.md#search) - Search contracts, events or base events
- [`predictionsOrdersGet`](docs/sdks/predictionsorders/README.md#get) - Get prediction order
- [`signalsGetBullBear`](docs/sdks/signals/README.md#getbullbear) - Get Bull & Bear Analysis
- [`stockAlternativeGetBankBranch`](docs/sdks/stockalternative/README.md#getbankbranch) - Get Bank Branch
- [`stockAlternativeGetCongressionalTrading`](docs/sdks/stockalternative/README.md#getcongressionaltrading) - Get Congressional Trading
- [`stockAlternativeGetCovid19US`](docs/sdks/stockalternative/README.md#getcovid19us) - Get COVID-19 US
- [`stockAlternativeGetEarningsCallLive`](docs/sdks/stockalternative/README.md#getearningscalllive) - Get Earnings Call Live
- [`stockAlternativeGetEarningsQualityScore`](docs/sdks/stockalternative/README.md#getearningsqualityscore) - Get Earnings Quality Score
- [`stockAlternativeGetEsg`](docs/sdks/stockalternative/README.md#getesg) - Get Company ESG
- [`stockAlternativeGetFDAAdvisoryCommitteeCalendar`](docs/sdks/stockalternative/README.md#getfdaadvisorycommitteecalendar) - Get FDA Advisory Committee Calendar
- [`stockAlternativeGetHistoricalESG`](docs/sdks/stockalternative/README.md#gethistoricalesg) - Get Historical ESG
- [`stockAlternativeGetInvestmentTheme`](docs/sdks/stockalternative/README.md#getinvestmenttheme) - Get Investment Theme
- [`stockAlternativeGetPresentation`](docs/sdks/stockalternative/README.md#getpresentation) - Get Company Presentation
- [`stockAlternativeGetSocialSentiment`](docs/sdks/stockalternative/README.md#getsocialsentiment) - Get Social Sentiment
- [`stockAlternativeGetSupplyChain`](docs/sdks/stockalternative/README.md#getsupplychain) - Get Supply Chain
- [`stockAlternativeGetTranscriptsList`](docs/sdks/stockalternative/README.md#gettranscriptslist) - Get Transcripts List
- [`stockAlternativeGetUsaSpending`](docs/sdks/stockalternative/README.md#getusaspending) - Get USA Spending
- [`stockAlternativeGetUsptoPatent`](docs/sdks/stockalternative/README.md#getusptopatent) - Get USPTO Patent
- [`stockAlternativeGetVisaApplication`](docs/sdks/stockalternative/README.md#getvisaapplication) - Get Visa Application (H1-B)
- [`stockAlternativesGetLobbying`](docs/sdks/stockalternatives/README.md#getlobbying) - Get Lobbying
- [`stockAlternativesGetTranscripts`](docs/sdks/stockalternatives/README.md#gettranscripts) - Get Transcript by ID
- [`stockEstimatesGetEarnings`](docs/sdks/stockestimates/README.md#getearnings) - Get Earnings Surprises
- [`stockEstimatesGetEbitdaEstimate`](docs/sdks/stockestimates/README.md#getebitdaestimate) - Get EBITDA Estimates
- [`stockEstimatesGetEBITEstimate`](docs/sdks/stockestimates/README.md#getebitestimate) - Get EBIT Estimates
- [`stockEstimatesGetEpsEstimate`](docs/sdks/stockestimates/README.md#getepsestimate) - Get EPS Estimates
- [`stockEstimatesGetPriceTarget`](docs/sdks/stockestimates/README.md#getpricetarget) - Get Analyst Price Targets
- [`stockEstimatesGetRevenueEstimate`](docs/sdks/stockestimates/README.md#getrevenueestimate) - Get Revenue Estimates
- [`stockEstimatesGetUpgradeDowngrade`](docs/sdks/stockestimates/README.md#getupgradedowngrade) - Get Analyst Upgrades & Downgrades
- [`stocksGetAggregates`](docs/sdks/stocks/README.md#getaggregates) - Get Aggregate Bars
- [`stocksGetDailySummary`](docs/sdks/stocks/README.md#getdailysummary) - Get Daily Market Summary
- [`stocksGetLastQuote`](docs/sdks/stocks/README.md#getlastquote) - Get Last Quote (NBBO)
- [`stocksGetLastTrade`](docs/sdks/stocks/README.md#getlasttrade) - Get Last Trade
- [`stocksGetOpenClose`](docs/sdks/stocks/README.md#getopenclose) - Get Daily Ticker Summary
- [`stocksGetPrevDay`](docs/sdks/stocks/README.md#getprevday) - Get Previous Day Bar
- [`stocksGetQuotes`](docs/sdks/stocks/README.md#getquotes) - Get Stock Quotes (NBBO)
- [`stocksGetSnapshot`](docs/sdks/stocks/README.md#getsnapshot) - Get Full Market Snapshot
- [`stocksGetTrades`](docs/sdks/stocks/README.md#gettrades) - Get Stock Trades
- [`stocksGetUnifiedSnapshot`](docs/sdks/stocks/README.md#getunifiedsnapshot) - Get Unified Snapshot
- [`technicalAnalysisGetIndicator`](docs/sdks/technicalanalysis/README.md#getindicator) - Get Technical Indicator Data
- [`technicalAnalysisGetPattern`](docs/sdks/technicalanalysis/README.md#getpattern) - Get Technical Patterns
- [`technicalAnalysisGetSupportResistance`](docs/sdks/technicalanalysis/README.md#getsupportresistance) - Get Support & Resistance Levels
- [`technicalAnalysisGetTechnicalIndicator`](docs/sdks/technicalanalysis/README.md#gettechnicalindicator) - Get Aggregate Technical Indicators
- [`usersAccountsList`](docs/sdks/usersaccounts/README.md#list) - Get User Accounts
- [`watchlistDelete`](docs/sdks/watchlist/README.md#delete) - Delete Watchlist
- [`watchlistsCreate`](docs/sdks/watchlists/README.md#create) - Create Watchlist
- [`watchlistsGet`](docs/sdks/watchlists/README.md#get) - Get Watchlist
- [`watchlistsList`](docs/sdks/watchlists/README.md#list) - List Watchlists
- [`watchlistsReplaceAll`](docs/sdks/watchlists/README.md#replaceall) - Replace All Watchlists
- [`watchlistsUpdate`](docs/sdks/watchlists/README.md#update) - Update Watchlist

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  const result = await financeDev.accounts.orders.listActive({
    id: "TEST-ACCOUNT-001",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
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
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`FinanceDevAPIError`](./src/models/errors/finance-dev-api-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";
import * as errors from "@ariesdotcom/finance-dev/models/errors";

const financeDev = new FinanceDev({
  security: {
    clientID: "<YOUR_CLIENT_ID_HERE>",
    clientSecret: "<YOUR_CLIENT_SECRET_HERE>",
  },
});

async function run() {
  try {
    const result = await financeDev.accounts.getPositions({
      id: "TEST-ACCOUNT-001",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.FinanceDevAPIError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.AuthenticationErrorEnvelope) {
        console.log(error.data$.error); // models.AuthenticationErrorDetail
        console.log(error.data$.meta); // { [k: string]: any }
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`FinanceDevAPIError`](./src/models/errors/finance-dev-api-error.ts): The base class for HTTP error responses.
  * [`ErrorResponse`](./src/models/errors/error-response.ts): Flat error body: an `error` string, with optional structured `codes` and additional `metadata`. *
  * [`AuthenticationErrorEnvelope`](./src/models/errors/authentication-error-envelope.ts): JSON envelope where `error` is a nested object (`type`, `code`, `message`, …). Many services use this shape for 400, 401, 403, 404, and 5xx when using the shared HTTP error format. *

<details><summary>Less common errors (8)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`FinanceDevAPIError`](./src/models/errors/finance-dev-api-error.ts)**:
* [`ErrorEnvelope`](./src/models/errors/error-envelope.ts): Prediction-market error envelope. Returned by historical-data and prediction-market reference endpoints on 400/404/500/502. Applicable to 6 of 151 methods.*
* [`PredOrdersErrorEnvelope`](./src/models/errors/pred-orders-error-envelope.ts): Invalid request. `INVALID_ORDER` carries the reason in `message`; on placement this includes refusals from order entry and the venue (price, tick size, account setup). Applicable to 3 of 151 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const financeDev = new FinanceDev({
  serverURL: "https://api.aries.com",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";
import { ProxyAgent } from "undici";
import { HTTPClient } from "@ariesdotcom/finance-dev/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new FinanceDev({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { FinanceDev } from "@ariesdotcom/finance-dev";

const sdk = new FinanceDev({ debugLogger: console });
```
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=finance-dev&utm_campaign=typescript)

## WebSocket streams

Stream market, chart, and account data with `sdk.websocket`. See the
[WebSocket guide](docs/websocket/README.md) for authentication, subscriptions,
reconnects, and examples.
