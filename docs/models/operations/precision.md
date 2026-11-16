# Precision

How long each chart bar covers. Pair with `period` to set the exact size. Allowed values: `Minute` or `Minutes` for minute bars; `Hour` or `Hours` for hour bars. Other nonempty values, including `Daily`, `Day`, `Days`, and `Week`, return HTTP 400 with code `VALIDATION_ERROR` and precision error: "field 'precision' must be one of: Minute Minutes Hour Hours".

## Example Usage

```typescript
import { Precision } from "@ariesdotcom/finance-dev/models/operations";

let value: Precision = "Minute";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"Minute" | "Minutes" | "Hour" | "Hours" | Unrecognized<string>
```