import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import Container from './views/Main/Container';

import makeMainRoutes from './views/Main/routes';

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Route path='/' component={Container}>
      {main}
    </Route>
  )
}

export default makeRoutes;
