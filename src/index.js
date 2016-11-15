import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from './Routes';
import './styles/main.scss'

{/* Redux Specific */}
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/reducers/';
const createStoreWithMiddleware = applyMiddleware()(createStore);

window.React = React;
render((
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('app'));

// enable :active
document.addEventListener("touchstart", function(){}, true);
