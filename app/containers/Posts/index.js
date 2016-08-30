import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { observer } from 'mobx-react';

/* component styles */
import s from './styles.css';

@observer
export default class Posts extends Component {
  static contextTypes = {
    posts: PropTypes.object, // get mobx posts store from context (see root component)
  };

  componentDidMount() {
    const { posts } = this.context;

    // Get posts from api, see /app/stores/posts
    posts.getPosts();
  }

  render() {
    const { posts } = this.context;

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

