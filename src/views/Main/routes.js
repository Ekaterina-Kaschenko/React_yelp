import React from 'react';
import {Route} from 'react-router';
import Container from './Container';
import Map from './Map/Map';

export const makeMainRoutes = () => {

  return (
<<<<<<< HEAD
    <Route path="/" component={Container}>
=======
    <Route path="" component={Container}>
>>>>>>> 7b3fbe8ce1c26ccd64297a2f66fed38411dce0c2
      <Route path="map" component={Map} />
    </Route>
  )
}

export default makeMainRoutes;
