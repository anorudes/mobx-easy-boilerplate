import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import R from 'ramda';

import { app, posts } from 'stores';
import Header from 'components/Header';
import Loading from 'components/Loading';

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

  componentDidMount() {
    app.hideLoading();
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    if (app.isLoading === true && !R.equals(location, prevProps.location)) {
      app.hideLoading();
    }
  }

  render() {
    return (
      <section>
        <Header />
        {
          app.isLoading
            ? <Loading />
            : this.props.children &&
                React.cloneElement(this.props.children, this.props)
        }
      </section>
    );
  }
}
