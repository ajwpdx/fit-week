import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import  thunk from 'redux-thunk'

import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store = {store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </Provider>
  </Router>,
  document.getElementById('root')
);
