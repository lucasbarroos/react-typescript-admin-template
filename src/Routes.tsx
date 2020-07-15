import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteProps,
} from 'react-router-dom';
import Home from './pages/Home/index';

interface TPrivateRouteProps extends RouteProps {
  isAuthenticated: boolean,
}

export default class Routes extends Route<TPrivateRouteProps> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}
