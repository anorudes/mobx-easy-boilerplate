import { observable, action } from 'mobx';
import axios from 'axios';

export default class Posts {
  @observable items = [];

  // Get items from api
  @action getPosts() {
    axios
      .get('/api/posts')
      .then(res => {
        this.items = res.data.posts;
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
