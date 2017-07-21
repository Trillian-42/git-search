import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import{ Router, Route, IndexRoute, browserHistory } from "react-router";
import Search from "./components/Search";
import User from "./components/User";


//create some routes yo! // Search is a child of app  //:username means we are going to use it as a parameter
const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>   
         <IndexRoute component={Search} />  
         <Route path="user/:username" component={User} />
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

