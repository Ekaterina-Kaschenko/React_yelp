import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';

import makeMainRoutes from './views/Main/routes';

export const makeRoutes = () => {
  const main = makeMainRoutes();

  return (
    <Route path="" component={Container}>
      <Route path="map" component={Map} />
      <Route path="detail/:placeId"
            component={Detail} />
    </Route>
  )
}

export default makeRoutes;
