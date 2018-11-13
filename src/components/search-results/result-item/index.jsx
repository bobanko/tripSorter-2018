import * as React from "react";

import "./styles.scss";

export class ResultItem extends React.Component {
  render() {
    let { deal } = this.props;

    return (
      <div className="result-item">
        <div className="flex--row flex--space">
          <div className="flex--row flex-center text--sm">
            <div className="result-item__departure text-cap">
              {deal.departure}
            </div>
            <i className="material-icons">arrow_forward</i>
            <div className="result-item__arrival text-cap">
              {deal.arrival.toString()}
            </div>
          </div>

          <div className="result-item__cost flex--col">
            {deal.hasDiscount && <div className="price--old">{deal.cost}€</div>}

            <div>{deal.discountCost}€</div>
          </div>
        </div>

        <div className="flex--row flex--space text--sm">
          <div className="flex--row">
            <i className="material-icons">{`directions_${deal.transport}`}</i>
            <div className="result-item__transport">{deal.transport}</div>
          </div>

          <div className="result-item__reference">{deal.reference}</div>
          <span>for</span>
          <div className="result-item__duration">
            {deal.duration.toString()}
          </div>
        </div>
      </div>
    );
  }
}
