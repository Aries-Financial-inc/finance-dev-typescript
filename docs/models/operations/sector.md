# Sector

Which industry sector to list tickers for. Use the exact uppercase value (including spaces) — these match the values returned by [GET /v1/equity/sector-wise-change](/api-reference/analytics/equity-sector-wise-change).
- `TECHNOLOGY` — software, hardware, semiconductors
- `HEALTHCARE` — pharma, biotech, medical devices, providers
- `FINANCIAL SERVICES` — banks, insurance, asset managers
- `CONSUMER CYCLICAL` — discretionary spending (autos, retail, travel)
- `CONSUMER DEFENSIVE` — staples (food, household goods, drugstores)
- `INDUSTRIALS` — manufacturing, transport, defense, machinery
- `ENERGY` — oil & gas, renewable energy
- `UTILITIES` — power, water, gas distribution
- `BASIC MATERIALS` — mining, chemicals, paper, metals
- `COMMUNICATION SERVICES` — telecom, media, internet platforms
- `REAL ESTATE` — REITs and real-estate operators
- `OTHER` — uncategorized
- `NONE` — no sector classification

## Example Usage

```typescript
import { Sector } from "finance-dev/models/operations";

let value: Sector = "TECHNOLOGY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"HEALTHCARE" | "UTILITIES" | "CONSUMER CYCLICAL" | "INDUSTRIALS" | "CONSUMER DEFENSIVE" | "BASIC MATERIALS" | "COMMUNICATION SERVICES" | "FINANCIAL SERVICES" | "TECHNOLOGY" | "REAL ESTATE" | "NONE" | "OTHER" | "ENERGY" | Unrecognized<string>
```