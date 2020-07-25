import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../views/main/Main';
import NotFound from '../views/not-found/NotFound';
import CoinPairs from '../views/coin-pairs/CoinPairs';

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/coin-pairs/:name">
          <CoinPairs />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
