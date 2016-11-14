import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './views/App';
import ComponentOne from './views/ComponentOne';
import ComponentTwo from './views/ComponentTwo';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={ComponentOne} />
    <Route path="component2" component={ComponentTwo} />
  </Route>
);
