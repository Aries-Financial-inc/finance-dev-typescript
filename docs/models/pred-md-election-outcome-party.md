# PredMdElectionOutcomeParty

The candidate's party, from the venue's candidate metadata; for a contract with none, from a primary or a party's placeholder contract. Otherwise `null`.

## Example Usage

```typescript
import { PredMdElectionOutcomeParty } from "@ariesdotcom/finance-dev/models";

let value: PredMdElectionOutcomeParty = "O";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"D" | "R" | "I" | "O" | Unrecognized<string>
```