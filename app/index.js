import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

if (__CLIENT__ && __DEVELOPMENT__) {
  // https://facebook.github.io/react/docs/advanced-performance.html
  window.Perf = require('react-addons-perf');
}

let initialState;
try {
  initialState = window.__INITIAL_STATE__; // for erver-side-rendering
} catch (err) {
  initialState = {};
}

export const history = browserHistory;

if (__CLIENT__) {
  ReactDOM.render(
    <Router history={history}>
      {routes}
    </Router>,
    document.getElementById('root')
  );
}
