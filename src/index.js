import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage';
import Explore from './Pages/Explore';
import Login from './Pages/Login';

import './index.css';

const app = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Route path="/" component={Layout}>
   	  <IndexRoute component={LandingPage}></IndexRoute>
      <Route path="explore" name="explore" component={Explore}></Route> 
	  <Route path="login" name="login" component={Login}></Route> 
    </Route>
  </Router>,
app);