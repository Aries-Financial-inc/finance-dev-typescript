# BarResolution

Bar size: minutes (`1`, `5`, `15`, `30`, `60`), or daily, weekly, or monthly (`D`, `W`, `M`).

## Example Usage

```typescript
import { BarResolution } from "@ariesdotcom/finance-dev/models";

let value: BarResolution = "M";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1" | "5" | "15" | "30" | "60" | "D" | "W" | "M" | Unrecognized<string>
```