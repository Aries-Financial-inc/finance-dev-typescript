# PredMdContractHitParty

The candidate's party from the venue: `D` Democratic, `R` Republican, `I` independent, `O` any other. `null` on a contract that is not a candidate.

## Example Usage

```typescript
import { PredMdContractHitParty } from "@ariesdotcom/finance-dev/models";

let value: PredMdContractHitParty = "R";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"D" | "R" | "I" | "O" | Unrecognized<string>
```