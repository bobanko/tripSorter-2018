import { Deal, IDeal } from "./deal";

import { dealsResponse } from "./deals.response";

export class DealsService {
  getDealsFromServer() {
    return Promise.resolve(dealsResponse);
  }

  mapDeals(dealsRaw) {
    return dealsRaw.deals.map(raw => new Deal(raw));
  }

  getDeals() {
    return this.getDealsFromServer().then(dealsRaw => this.mapDeals(dealsRaw));
  }
}
