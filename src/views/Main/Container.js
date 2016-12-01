import React, { PropTypes as T } from 'react';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import {searchNearby} from 'utils/googleApiHelpers';
import {Header} from '../../components/Header/Header.js';
import {Listing} from '../../components/Listing/Listing.js';
import Sidebar from 'components/Sidebar/Sidebar';
import styles from './styles.module.css';

export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      pagination: null
    }
  }

  onReady(mapProps, map) {
    const {google} = this.props;
    const opts = {
      location: map.center,
      radius: '500',
      types: ['cafe']
    }
    searchNearby(google, map, opts)
      .then((results, pagination) => {
        this.setState({
          places: results,
          pagination
        })
      }).catch((status, result) => {
        // There was an error
      })
  }

  render() {
      return (
        <Map
          visible={false}
          className={styles.wrapper}>
          <Header />
          <Sidebar />
          <div className={styles.content}>
            {this.props.children}
          </div>
        </Map>
      )
    }
}

export default GoogleApiWrapper({
  apiKey: process.env.__GAPI_KEY__
})(Container);
