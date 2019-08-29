import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import Home from './scenes/home';

import trending from './services/trending/reducer';
import modal from './services/modal/reducer';

const rootReducer = combineReducers({
  trending,
  modal
});

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxThunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
