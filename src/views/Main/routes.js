import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Container from './Container';
import MapComponent from './Map/Map';
import DetailComponent from './Detail/Detail';

const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="map" component={MapComponent}>
        <Route path="detail/:placeId" component={DetailComponent} />
      </Route>

      <IndexRoute component={MapComponent} />
    </Route>
  )
}

export default makeMainRoutes;
