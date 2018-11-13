import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

import { SearchForm } from "./search-form";

import { SearchResults } from "./search-results";

import "./index.scss";

const Header = () => (
  <ul>
    <li>
      <Link to="/topics">_Topics</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
    <li>
      <Link to="/results">Results</Link>
    </li>
  </ul>
);

class App extends React.Component {
  render() {
    return (
      <div className="app flex--col flex--center">
        <h1 className="flex--row flex--center">TripSorter</h1>
        <Router basename="/tripSorter-2018/dist">
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
