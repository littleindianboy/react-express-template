import React from 'react';
import { Router, browserHistory } from 'react-router';
import { render } from 'react-dom';
import routes from '../Routes';
import '../styles/main.scss'

window.React = React;

render(( <Router history={browserHistory}> {routes} </Router> ), document.getElementById('app'));

// enable :active
document.addEventListener("touchstart", function(){}, true);
