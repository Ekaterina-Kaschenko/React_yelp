import React, { PropTypes as T } from 'react';
import styles from './styles.module.css';
import Listing from 'components/Listing/Listing';
import classnames from 'classnames';

export class Sidebar extends React.Component {
  render() {
    return (
      <div className={classnames(styles.sidebar)}>
        <div className={classnames(styles.heading)}>
          <h1>{this.props.title}</h1>
        </div>
        <Listing places={this.props.places} />
      </div>
    )
  }
}

Sidebar.defaultProps = {
  title: 'Restaurants'
}

export default Sidebar;
