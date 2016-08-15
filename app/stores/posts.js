import { observable, action } from 'mobx';
import axios from 'utils/axios';

class Posts {
  @observable items = [];

  // Get items from api
  @action getPosts() {
    axios
      .get('/api/posts')
      .then(res => {
        setTimeout(() => { // delay for example
          this.items = res.data.posts;
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
