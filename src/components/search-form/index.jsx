import * as React from "react";

import { serializeFormParams, getUrlParams } from "../../helpers";
import { citiesService } from "../../services/cities.service";

import "./styles.scss";

const SORTBY = {
  CHEAPEST: "cheapest",
  FASTEST: "fastest"
};

export class SearchForm extends React.Component {
  state = {
    departureCities: [],
    arrivalCities: [],
    departure: null,
    arrival: null
  };

  form = null;

  componentDidMount() {
    const urlParams = getUrlParams(location.href);

    Promise.all([
      citiesService.getDepartureCities(),
      citiesService.getArrivalCities()
    ]).then(([departureCities, arrivalCities]) => {
      this.setState({
        departureCities,
        arrivalCities,
        departure: urlParams.departure || departureCities[0],
        arrival: urlParams.arrival || arrivalCities[0],
        sortBy: urlParams.sortBy || "fastest"
      });
    });
  }

  search(event) {
    event.preventDefault();
    let paramUrl = serializeFormParams(this.form);
    this.props.history.push(`/search?${paramUrl}`);
  }

  render() {
    let {
      departureCities,
      arrivalCities,
      arrival,
      departure,
      sortBy
    } = this.state;

    if (departureCities.length === 0) {
      return "cities loading...";
    }

    return (
      <form
        ref={el => (this.form = el)}
        className="search-form flex--col"
        onSubmit={event => this.search(event)}
      >
        <div className="flex--col">
          <select name="departure" defaultValue={departure}>
            {departureCities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          <select name="arrival" defaultValue={arrival}>
            {arrivalCities.map(city => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="flex--row text-cap">
          <label className="sort-select flex--row">
            <input
              className="sort-select__radio"
              type="radio"
              defaultChecked={sortBy === SORTBY.CHEAPEST}
              name="sortBy"
              value={SORTBY.CHEAPEST}
            />
            <div className="sort-select__text">{SORTBY.CHEAPEST}</div>
          </label>
          <label className="sort-select flex--row">
            <input
              className="sort-select__radio"
              type="radio"
              defaultChecked={sortBy === SORTBY.FASTEST}
              name="sortBy"
              value={SORTBY.FASTEST}
            />
            <div className="sort-select__text">{SORTBY.FASTEST}</div>
          </label>
        </div>

        <button type="cancel" className="flex--center text-cap btn-submit">
          <i className="material-icons">search</i>
          Search
        </button>
      </form>
    );
  }
}
