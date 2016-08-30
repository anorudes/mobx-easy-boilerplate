import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './containers/Root';
import Posts from './containers/Posts';
import About from './components/About';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Posts} />

    <Route path="/posts" component={Posts} />
    <Route path="/about" component={About} />
  </Route>
);
