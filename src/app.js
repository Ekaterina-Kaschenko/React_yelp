import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles/style.module.css';

const App = React.createClass({
  render() {
    return (
      <div className={styles.container}>
        Text text text
      </div>
    );
  }
});

ReactDOM.render(<App />, document.querySelector('#root'));
