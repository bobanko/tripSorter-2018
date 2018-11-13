import { Deal } from "./deal";

import { dealsResponse } from "./deals.response";

class DealsService {
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

export const dealsService = new DealsService();
