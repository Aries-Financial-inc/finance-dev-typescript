# TickResolution

Tick bar size: the number of trades that make up one bar. For example, `100T` closes a new bar every 100 trades, regardless of how much time that takes. Larger values (e.g. `1000T`) smooth out noise and are better suited to a wider chart view; smaller values (e.g. `1T`, one trade per bar) show every individual trade and suit a zoomed-in view.

## Example Usage

```typescript
import { TickResolution } from "finance-dev/models";

let value: TickResolution = "100T";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"1T" | "5T" | "10T" | "25T" | "50T" | "100T" | "250T" | "500T" | "1000T" | Unrecognized<string>
```