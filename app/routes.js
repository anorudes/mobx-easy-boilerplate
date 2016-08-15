import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './components/Root';
import Posts from './components/Pages/Posts';
import About from './components/Pages/About';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Posts} />

    <Route path="/posts" component={Posts} />
    <Route path="/about" component={About} />
  </Route>
);
