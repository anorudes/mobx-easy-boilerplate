import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import R from 'ramda';

import connect from 'stores/connect';
import Header from 'components/Header';
import Loading from 'components/Loading';

/* global styles for app */
if (__CLIENT__) {
  require('./styles/app.css');
}

class Root extends Component {
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
    app: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.props;

    app.hideLoading();
  }

  componentDidUpdate(prevProps) {
    const { app, location } = this.props;

    if (app.isLoading === true && !R.equals(location, prevProps.location)) {
      app.hideLoading();
    }
  }

  render() {
    const { app } = this.props;

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

export default connect(observer(Root));
