import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import{ Router, Route, IndexRoute, browserHistory } from "react-router";
import App from './components/App';
import Search from "./components/Search";
import User from "./components/User";
import Followers from "./components/Followers";
import Following from "./components/Following";
import Repos from "./components/Repos";



//create some routes yo! // Search is a child of app  //:username means we are going to use it as a parameter
const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>   
         <IndexRoute component={Search} />  
         <Route path="user/:username" component={User}>
           <Route path="followers" component={Followers} />
           <Route path="following" component={Following} />
           <Route path="repos" component={Repos} />
         </Route> 
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

