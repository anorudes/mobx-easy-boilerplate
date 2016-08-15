import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import { stores } from 'stores';
import Header from 'components/Modules/Header';

/* global styles for app */
if (__CLIENT__) {
  require('./styles/app.css');
}

export default class Root extends Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
  };

  static childContextTypes = {
    posts: React.PropTypes.object,
  }

  getChildContext() {
    // Put mobx stores in context

    return {
      posts: stores.posts,
    };
  }

  render() {
    return (
      <section>
        <Helmet
          title="posts"
        />
        <Header />
        {
          this.props.children &&
            React.cloneElement(this.props.children, this.props)
        }
      </section>
    );
  }
}
