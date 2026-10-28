# TenderOffersResponse

Tender offers found for the requested security and date window.

## Example Usage

```typescript
import { TenderOffersResponse } from "@ariesdotcom/finance-dev/models";

let value: TenderOffersResponse = {
  tenderOffers: [
    {},
  ],
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `security`                                                                          | [models.TenderOffersResponseSecurity](../models/tender-offers-response-security.md) | :heavy_minus_sign:                                                                  | Security the tender offers relate to                                                |
| `tenderOffers`                                                                      | [models.TenderOffer](../models/tender-offer.md)[]                                   | :heavy_check_mark:                                                                  | List of tender offer records                                                        |