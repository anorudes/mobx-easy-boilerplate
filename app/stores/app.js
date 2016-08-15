import { observable } from 'mobx';

class App {
  @observable isFetching = false; // for Loading component
}

export default new App();
