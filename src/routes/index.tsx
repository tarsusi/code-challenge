import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../views/main/Main';
import NotFound from '../views/not-found/NotFound';
import Markets from '../views/markets/Markets';

import Header from '../components/header/Header';

const Routes: React.FC = () => {
  return (
    <Router>
      <Header></Header>
      <main className="app-main-container">
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/markets/:name">
            <Markets />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default Routes;
