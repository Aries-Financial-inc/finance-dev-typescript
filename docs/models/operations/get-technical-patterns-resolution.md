# GetTechnicalPatternsResolution

How long each bar covers. Supported values are minutes (`1`, `5`, `15`, `30`, `60`) or daily/weekly/monthly (`D`, `W`, `M`). Other values return 400 Bad Request with error code `VALIDATION_ERROR`.

## Example Usage

```typescript
import { GetTechnicalPatternsResolution } from "@ariesdotcom/finance-dev/models/operations";

let value: GetTechnicalPatternsResolution = "W";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1" | "5" | "15" | "30" | "60" | "D" | "W" | "M" | Unrecognized<string>
```