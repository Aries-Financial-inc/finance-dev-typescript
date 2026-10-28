# TenderOfferIdentifierType

Which kind of identifier you are filtering by. Provide the matching value in the identifier field:
- `Symbol` — exchange ticker (e.g. `AAPL`).
- `CUSIP` — 9-character U.S./Canadian security identifier.
- `ISIN` — 12-character international identifier.
- `SEDOL` — 7-character UK identifier.
- `Valoren` — Swiss identifier.
- `FIGI` — Bloomberg Financial Instrument Global Identifier.
- `CompositeFIGI` — country-level composite FIGI.

## Example Usage

```typescript
import { TenderOfferIdentifierType } from "@ariesdotcom/finance-dev/models";

let value: TenderOfferIdentifierType = "Symbol";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Symbol" | "CUSIP" | "ISIN" | "SEDOL" | "Valoren" | "FIGI" | "CompositeFIGI" | Unrecognized<string>
```