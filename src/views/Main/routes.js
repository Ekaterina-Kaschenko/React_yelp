import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Container from './Container';
import MapComponent from './Map/Map';

export const makeMainRoutes = () => {

  return (
    <Route path="/" component={Container}>
      <Route path="map" component={MapComponent} />
    </Route>
  )
}

export default makeMainRoutes;
