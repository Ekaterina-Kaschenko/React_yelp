import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route} from 'react-router';
import App from 'containers/App/App';

import 'font-awesome/css/font-awesome.css';
import './app.css';

const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

const routes = (
  <Router>
    <Route path="/" component={Home} />
  </Router>
);

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={browserHistory} />, mountNode);
