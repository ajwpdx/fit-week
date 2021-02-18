import React from 'react';
import ReactDOM from 'react-dom';

//component
import App from './App';

//router
import { BrowserRouter as Router } from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import  thunk from 'redux-thunk'
import reducer from './redux-reducer'

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
