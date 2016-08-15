import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';

import { app, posts } from 'stores';
import Header from 'components/Modules/Header';
import Loading from 'components/Modules/Loading';

/* global styles for app */
if (__CLIENT__) {
  require('./styles/app.css');
}

@observer
export default class Root extends Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
  };

  static childContextTypes = {
    posts: React.PropTypes.object,
    app: React.PropTypes.object,
  }

  getChildContext() {
    // Put mobx stores in context

    return {
      app,
      posts,
    };
  }

  render() {
    return (
      <section>
        {
          app.isFetching && <Loading />
        }
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
