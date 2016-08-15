import { observable, action } from 'mobx';
import axios from 'axios';

import app from './app.js';

class Posts {
  @observable items = [];

  // Get items from api
  @action getPosts() {
    app.isFetching = true; // for Loading component

    axios
      .get('/api/posts')
      .then(res => {
        setTimeout(() => { // delay for example
          this.items = res.data.posts;
          app.isFetching = false;
        }, 1000);
      });
  }

  // Add example item
  @action addItem() {
    this.items.push({
      id: this.items.length + 1,
      text: `example ${this.items.length}`,
    });
  }
}

export default new Posts();
