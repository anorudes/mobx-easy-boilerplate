import { observable, action } from 'mobx';
import axios from 'axios';

class Posts {
  @observable items = [];
  @observable isFetching = false;

  // Get items from api
  @action getPosts() {
    this.isFetching = true;

    axios
      .get('/api/posts')
      .then(res => {
        this.items = res.data.posts;
        this.isFetching = false;
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
