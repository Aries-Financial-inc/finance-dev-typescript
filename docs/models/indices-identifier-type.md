# IndicesIdentifierType

Which kind of identifier you are sending in `identifier` / `identifiers`. Provide the matching value:
- `Symbol` — index ticker (e.g. `SPX.IND_CBOM`). Default.
- `CIK` — SEC Central Index Key.
- `CUSIP` — 9-character U.S./Canadian security identifier.
- `ISIN` — 12-character international identifier.
- `Valoren` — Swiss security identifier.
- `SEDOL` — 7-character UK identifier.
- `FIGI` — Bloomberg Financial Instrument Global Identifier.
- `CompositeFIGI` — country-level composite FIGI.

## Example Usage

```typescript
import { IndicesIdentifierType } from "finance-dev/models";

let value: IndicesIdentifierType = "Symbol";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Symbol" | "CIK" | "CUSIP" | "ISIN" | "Valoren" | "SEDOL" | "FIGI" | "CompositeFIGI" | Unrecognized<string>
```