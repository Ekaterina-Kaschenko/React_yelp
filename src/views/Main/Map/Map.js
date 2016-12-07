import React, { PropTypes as T } from 'react';
import classnames from 'classnames';
import Map, { Marker } from 'google-maps-react'

import styles from './styles.module.css';

export class MapComponent extends React.Component {
  renderMarkers() {
    if (!this.props.places) { return; }
    return this.props.places.map(place =>{
      return <Marker key={place.id}
                  name={place.id}
                  place={place}
                  label={p.name}
                  map={this.props.map}
                  position={place.geometry.location}
            />
    })
  }
  render() {
    return (
      <Map google={this.props.google}
          map={this.props.map}
          className={styles.map}>
        {this.renderMarkers()}
      </Map>
    )
  }
}

export default MapComponent;
