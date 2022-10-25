import React from 'react';
import ReactDOM from 'react-dom/client';
// import ConfigureStore from './constants/stores/store.js';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);