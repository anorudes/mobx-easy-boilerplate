import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';
import connect from 'stores/connect';

/* component styles */
import s from './styles.css';

class Posts extends Component {
  static propTypes = {
    posts: PropTypes.object,
  };

  componentDidMount() {
    const { posts } = this.props;

    // Get posts from api, see /app/mobx/stores/posts
    posts.getPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <section className={s.root}>
        <Helmet
          title="posts"
        />
        <h1>Posts page</h1>
        {
          posts.isFetching &&
            <span>Loading...</span>
        }
        <div className={s.list}>
          { // Render posts
            posts.items.map(post =>
              <div className={s.item} key={post.id}>
                {post.id}) {post.text}
              </div>
            )
          }
          <button onClick={() => posts.addItem()}>add item</button>
        </div>
      </section>
    );
  }
}

export default connect(observer(Posts));
