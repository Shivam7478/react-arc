import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Root from './components/Root'
import appReducer from './reducers'
import { createStore } from 'redux'
const store = createStore(appReducer)

ReactDOM.render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
