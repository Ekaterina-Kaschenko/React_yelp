import React, { PropTypes as T } from 'react';
import classnames from 'classnames';
import Map, { Marker } from 'google-maps-react'

import styles from '../styles.module.css';

Map.defaultProps = {
  zoom: 13,
  // San Francisco, by default
  initialCenter: {
    lat: 50.0647,
    lng: 19.9450
  }
}

export class MapComponent extends React.Component {
  renderChildren() {
    const {children} = this.props;
    if (React.Children.count(children) > 0) {
      return React.Children.map(children, c => {
        return React.cloneElement(c, this.props, {
          map: this.props.map,
          google: this.props.google
        })
      })
    } else {
      return this.renderMarkers();
    }
  }
  renderMarkers() {
    if (!this.props.places) { return; }
    return this.props.places.map(place => {
      return <Marker key={place.id}
                  name={place.id}
                  place={place}
                  onClick={this.props.onMarkerClick.bind(this)}
                  label={place.name}
                  map={this.props.map}
                  position={place.geometry.location}
            />
    })
  }
  render() {
    return (
      <Map google={this.props.google}
          map={this.props.map}
          className={styles.map}
          onRecenter={this.props.onMove}
          onDragend={this.props.onMove}
          onClick={this.props.onClick}
          visible={!this.props.children || React.Children.count(this.props.children) == 0}
        >
        {this.renderChildren()}
      </Map>
    )
  }
}

MapComponent.propTypes = {
  onMarkerClick: T.func
}
const identity = (...a) => a;
MapComponent.defaultProps = {
  onMarkerClick: identity
}

export default MapComponent;
