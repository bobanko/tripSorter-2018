import { dealsService } from "./deals.service";

function onlyUnique(items) {
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
  getDepartureCities() {
    return dealsService
      .getDeals()
      .then(deals => deals.map(deal => deal.departure))
      .then(onlyUnique)
      .then(sortAsc);
  }

  getArrivalCities() {
    return dealsService
      .getDeals()
      .then(deals => deals.map(deal => deal.arrival))
      .then(onlyUnique)
      .then(sortAsc);
  }

  getAllCities() {
    // todo: impl for case when arrival and departure not the same?
    return this.getDepartureCities();
  }
}

export const citiesService = new CitiesService();
