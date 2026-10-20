# Timespan

Time span unit for each aggregate bar, such as minute, hour, day, week, month, quarter, or year when supported.

## Example Usage

```typescript
import { Timespan } from "finance-dev/models/operations";

let value: Timespan = "day";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"second" | "minute" | "hour" | "day" | "week" | "month" | "quarter" | "year" | Unrecognized<string>
```