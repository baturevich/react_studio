import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/reset.css';
import './css/index.scss';

import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js';



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);