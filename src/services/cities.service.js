import { DealsService } from "./deals.service";

function onlyUnique(items) {
  //: string[]
  return items.reduce((uniqueItems, item) => {
    //todo: check!
    if (uniqueItems.indexOf(item) < 0) {
      uniqueItems.push(item);
    }
    return uniqueItems;
  }, []);
}

function sortAsc(items) {
  return items.sort();
}

class CitiesService {
  dealsService;
  constructor() {
    this.dealsService = new DealsService();
  }

  getDepartureCities() {
    return this.dealsService
      .getDeals()
      .then(deals => deals.map(deal => deal.departure))
      .then(onlyUnique)
      .then(sortAsc);
  }

  getArrivalCities() {
    return this.dealsService
      .getDeals()
      .then(deals => deals.map(deal => deal.arrival))
      .then(onlyUnique)
      .then(sortAsc);
  }

  getAllCities() {
    // todo: impl for case when arrival and departure not the same
    return this.getDepartureCities();
  }
}

export const citiesService = new CitiesService();
