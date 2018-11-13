import * as React from "react";

import { Deal, Duration } from "../../services/deal";
import { SearchParams, SearchService } from "../../services/search.service";
import { ResultItem } from "./result-item";

import { getUrlParams } from "../../helpers";

import "./styles.scss";

export class SearchResults extends React.Component {
  state = {
    results: [], //Deal[]
    totalCost: 0, //number
    totalDiscountedCost: 0, //: number;
    totalDuration: 0 //: Duration;
  };

  searchService = new SearchService();

  getTotalCost(results) {
    //: Deal[]: number
    return results.reduce((sum, deal) => sum + deal.cost, 0);
  }

  getTotalDiscountedCost(
    results //: Deal[]: number
  ) {
    return results.reduce((sum, deal) => sum + deal.discountCost, 0);
  }

  getTotalDuration(
    results //: Deal[]: Duration
  ) {
    const durationMins = results.reduce((sum, deal) => sum + +deal.duration, 0);

    return new Duration({
      h: Math.trunc(durationMins / 60),
      m: durationMins % 60
    });
  }

  componentDidMount() {
    const urlParams = getUrlParams(location.href);

    this.searchService.search(urlParams).then(results => {
      if (results.length === 0) {
        return;
      }

      console.log(results);

      this.setState({
        results,
        totalCost: this.getTotalCost(results),
        totalDiscountedCost: this.getTotalDiscountedCost(results),
        totalDuration: this.getTotalDuration(results)
      });
    });
  }

  goBack() {
    this.props.history.push(`/search${location.search}`);
  }

  render() {
    let { results, totalDiscountedCost, totalCost, totalDuration } = this.state;
    //
    //todo: cleanup layout
    if (results.length === 0) {
      return (
        <form className="search-results flex--col">
          <div className="flex--row flex--center">
            <i className="material-icons">directions_run</i>
            <span>No deals found</span>
            <i className="material-icons">weekend</i>
          </div>
          <button
            type="button"
            className="flex--center text-cap"
            onClick={() => this.goBack()}
          >
            <i className="material-icons">replay</i> reset
          </button>
        </form>
      );
    }

    return (
      <form className="search-results flex--col">
        <div className="result-list">
          {results.map(item => (
            <ResultItem key={item.reference} deal={item} />
          ))}

          <div className="total flex--row flex--space">
            <div className="total__label text-cap">total</div>
            <div className="total__time">{totalDuration.toString()}</div>
            <div className="flex--col">
              {totalCost > totalDiscountedCost && (
                <div className="total__cost price--old">{totalCost}€</div>
              )}
              <div className="total__cost">{totalDiscountedCost}€</div>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="flex--center text-cap"
          onClick={() => this.goBack()}
        >
          <i className="material-icons">replay</i> reset
        </button>
      </form>
    );
  }
}
