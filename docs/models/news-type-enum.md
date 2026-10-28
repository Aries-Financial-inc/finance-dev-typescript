# NewsTypeEnum

Source category of the news item. Pick one:
- `news` — Editorial news articles from journalists and news services.
- `press_release` — Official press releases issued directly by companies.

## Example Usage

```typescript
import { NewsTypeEnum } from "@ariesdotcom/finance-dev/models";

let value: NewsTypeEnum = "news";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"news" | "press_release" | Unrecognized<string>
```