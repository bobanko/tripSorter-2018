import * as React from "react";

import { Duration } from "../../services/deal";
import { searchService } from "../../services/search.service";
import { ResultItem } from "./result-item";

import { getUrlParams } from "../../helpers";

import "./styles.scss";

//todo: move pure funcs elsewhere?
function getTotalCost(results) {
  return results.reduce((sum, deal) => sum + deal.cost, 0);
}

function getTotalDiscountedCost(results) {
  return results.reduce((sum, deal) => sum + deal.discountCost, 0);
}

function getTotalDuration(results) {
  const durationMins = results.reduce((sum, deal) => sum + +deal.duration, 0);

  return new Duration({
    h: Math.trunc(durationMins / 60),
    m: durationMins % 60
  });
}

export class SearchResults extends React.Component {
  state = {
    results: []
  };

  componentDidMount() {
    const urlParams = getUrlParams(location.href);

    searchService.search(urlParams).then(results => {
      this.setState({
        results
      });
    });
  }

  goBack() {
    this.props.history.push(`/search${location.search}`);
  }

  renderNoResult() {
    return (
      <div className="flex--row flex--center">
        <i className="material-icons">directions_run</i>
        <span>No deals found</span>
        <i className="material-icons">weekend</i>
      </div>
    );
  }

  renderResultList(results) {
    let totalCost = getTotalCost(results);
    let totalDiscountedCost = getTotalDiscountedCost(results);
    let totalDuration = getTotalDuration(results).toString();

    return (
      <div className="result-list">
        {results.map(item => (
          <ResultItem key={item.reference} deal={item} />
        ))}

        <div className="total flex--row flex--space">
          <div className="total__label text-cap">total</div>
          <div className="total__time">{totalDuration}</div>
          <div className="flex--col">
            {totalCost > totalDiscountedCost && (
              <div className="total__cost price--old">{totalCost}€</div>
            )}
            <div className="total__cost">{totalDiscountedCost}€</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    let { results } = this.state;

    return (
      <form className="search-results flex--col">
        {results.length > 0 && this.renderResultList(results)}

        {results.length === 0 && this.renderNoResult()}

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
