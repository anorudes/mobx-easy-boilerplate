import React, { Component } from 'react';
import { posts, app } from './stores';

function connect(DecoratedComponent) {
  class Connect extends Component {
    render() {
      return (
        <DecoratedComponent
          posts={posts}
          app={app}
          {...this.props}
        />
      );
    }
  }

  return Connect;
}

export default connect;
