# PredMdElectionRaceStatus

`open` while it trades, `closed` once trading has ended and the result is not yet known, `resolved` once the venue has settled it.

## Example Usage

```typescript
import { PredMdElectionRaceStatus } from "@ariesdotcom/finance-dev/models";

let value: PredMdElectionRaceStatus = "open";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "closed" | "resolved" | Unrecognized<string>
```