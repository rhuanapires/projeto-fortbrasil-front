import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Details from '../pages/Details';
import Heroes from '../pages/Heroes';
import Main from '../pages/Main';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/heroes" exact component={Heroes} />
        <Route path="/details/" exact component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
