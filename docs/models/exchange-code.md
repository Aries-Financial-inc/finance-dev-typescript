# ExchangeCode

Two-to-three-letter exchange code identifying a global stock exchange (e.g. `US` = U.S. exchanges, `L` = London, `HK` = Hong Kong, `T` = Tokyo, `PA` = Paris). Used as the `exchange` query parameter for market-status and market-holiday endpoints. Other endpoints may return a different exchange-code format depending on the upstream data source.

## Example Usage

```typescript
import { ExchangeCode } from "@ariesdotcom/finance-dev/models";

let value: ExchangeCode = "US";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"AD" | "AS" | "AT" | "AX" | "BA" | "BC" | "BD" | "BE" | "BH" | "BK" | "BO" | "BR" | "CA" | "CN" | "CO" | "CR" | "CS" | "DB" | "DE" | "DU" | "F" | "HA" | "HE" | "HK" | "HM" | "IC" | "IR" | "IS" | "JK" | "JO" | "KL" | "KQ" | "KS" | "KW" | "L" | "LS" | "MC" | "ME" | "MI" | "MT" | "MU" | "MX" | "NE" | "NL" | "NS" | "NZ" | "OL" | "OM" | "PA" | "PK" | "PM" | "PR" | "QA" | "RG" | "RO" | "SA" | "SC" | "SG" | "SI" | "SN" | "SR" | "SS" | "ST" | "SW" | "SX" | "SZ" | "T" | "TA" | "TG" | "TL" | "TO" | "TW" | "TWO" | "US" | "V" | "VI" | "VN" | "VS" | "WA" | Unrecognized<string>
```