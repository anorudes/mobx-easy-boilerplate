import { observable, action } from 'mobx';

class App {
  @observable isLoading = false; // for Loading component

  @action showLoading() {
    this.isLoading = true;
  }

  @action hideLoading() {
    this.isLoading = false;
  }
}

export default new App();
