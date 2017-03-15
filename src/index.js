// @flow


import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage';
import Explore from './Pages/Explore';
import Login from './Pages/Login';

import './index.css';

import { Provider } from 'react-redux'
import store from './store/store';


const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
  <Router>
    <Route path="/" component={Layout}>
   	  <IndexRoute component={LandingPage}></IndexRoute>
      <Route path="explore" name="explore" component={Explore}></Route> 
	  <Route path="login" name="login" component={Login}></Route> 
    </Route>
  </Router>
  </Provider>,
app);

