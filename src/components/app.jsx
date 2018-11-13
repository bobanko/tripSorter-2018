import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { SearchForm } from "./search-form";
import { SearchResults } from "./search-results";

import "./styles.scss";

//todo: somehow fix direct url reloads
//apply only for gh-p
const baseUrl = "/tripSorter-2018/dist";

class App extends React.Component {
  render() {
    return (
      <div className="app flex--col flex--center">
        <h1 className="flex--row flex--center">TripSorter</h1>
        <Router basename={baseUrl}>
          <Switch>
            <Route path="/search" component={SearchForm} />
            <Route path="/results" component={SearchResults} />
            <Redirect exact from="/" to="/search" />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
