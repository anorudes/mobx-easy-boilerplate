import axios from 'axios';
import app from '../stores/app';

// Create and export instance axios for auto change isFetching in app mobx store
export default axios.create({
  baseURL: '/',

  transformRequest: [data => {
    app.isFetching = true; // Show Loading component

    return data;
  }],

  transformResponse: [data => {
    app.isFetching = false; // Hide Loading component

    return JSON.parse(data);
  }],
});
