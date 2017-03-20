// @flow


import React from 'react';
import ReactDOM from 'react-dom';
import { history, Router, Route, IndexRoute } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import TestPage from './Pages/TestPage';


import './index.css';

import { Provider } from 'react-redux'
import store from './store/store';


const app = document.getElementById('root')
console.log(history)

ReactDOM.render(
	<Provider store={store}>
  <Router history={history}>
    <Route path="/" component={Layout}>
   	  <IndexRoute component={LandingPage}></IndexRoute>
      <Route path="explore" name="explore" component={Explore}></Route> 
	    <Route path="login" name="login" component={Login}></Route> 
      <Route path="profile" name="profile" component={Profile}></Route> 
	    <Route path="testPage" name="testPage" component={TestPage}></Route> 
    </Route>
  </Router>
  </Provider>,
app);

