# GetTechnicalIndicatorResolution

How long each bar covers. Supported values are minutes (`1`, `5`, `15`, `30`, `60`) or daily/weekly/monthly (`D`, `W`, `M`). Other values return 400 Bad Request with error code `VALIDATION_ERROR`.

## Example Usage

```typescript
import { GetTechnicalIndicatorResolution } from "finance-dev/models/operations";

let value: GetTechnicalIndicatorResolution = "M";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1" | "5" | "15" | "30" | "60" | "D" | "W" | "M" | Unrecognized<string>
```