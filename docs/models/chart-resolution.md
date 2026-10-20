# ChartResolution

How long each candle/bar on the chart should cover. Two families of values are supported:

**Intraday (minute bars)** — `1`, `3`, `5`, `15`, `30`, `45`, `60`, `120`, `180`, `240` — the number is the bar's length in minutes (e.g. `5` = five-minute bars, `60` = hourly).

**Daily and longer** — `D` / `1D` = daily, `W` / `1W` = weekly, `M` / `1M` = monthly, `3M` / `6M` / `12M` = three-/six-/twelve-month bars.

For tick-based bars (bars that close every N trades instead of every N minutes), use [Tick-Based Chart Data](/api-reference/chart/get-tick-history) instead — tick resolutions are also accepted here; use tick-history for countback and cursor pagination.

## Example Usage

```typescript
import { ChartResolution } from "finance-dev/models";

let value: ChartResolution = "D";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1" | "3" | "5" | "15" | "30" | "45" | "60" | "120" | "180" | "240" | "D" | "W" | "M" | "1D" | "1W" | "1M" | "3M" | "6M" | "12M" | "1T" | "5T" | "10T" | "25T" | "50T" | "100T" | "250T" | "500T" | "1000T" | Unrecognized<string>
```