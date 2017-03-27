// @flow


import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory,  
//   BrowserRouter as Router,
//   IndexRoute,
//   Route,
//   Link } from "react-router";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Pages/Layout';
import LandingPage from './Pages/LandingPage';
import Explore from './Pages/Explore';
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import CreateNew from './Pages/CreateNew';
import TestPage from './Pages/TestPage';


import './index.css';

import { Provider } from 'react-redux'
import store from './store/store';


const app = document.getElementById('root')

ReactDOM.render(
	<Provider store={store}>
    <Router history={history}>
      <Layout>
        <Route exact={true} path="/" component={LandingPage}></Route>
        <Route path="/explore" name="explore" component={Explore}></Route> 
    	  <Route path="/login" name="login" component={Login}></Route> 
        <Route path="/Create" name="Create" component={CreateNew}></Route> 
        <Route path="/profile" name="profile" component={Profile}></Route> 
    	  <Route path="/testPage" name="testPage" component={TestPage}></Route> 
      </Layout>
    </Router>
  </Provider>,
app);

