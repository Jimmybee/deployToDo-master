// @flow

import { urlHost } from './commonConstants'
import React from 'react';
import ReactDOM from 'react-dom';
// import { browserHistory,  
//   BrowserRouter as Router,
//   IndexRoute,
//   Route,
//   Link } from "react-router";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Layout from './Pages/Layout';
import NavLayout from './Pages/NavLayout';


import About from './Pages/About/About';
import HowItWorks from './Pages/HowItWorks/HowItWorks';
import LandingPage from './Pages/LandingPage';
// import Explore from './Pages/Explore';
import Explore from './Pages/Explore/Explore';

import Login from './Pages/Login/Login';
import Profile from './Pages/Profile';
import CreateNew from './Pages/CreateNew/CreateNew';
import TestPage from './Pages/TestPage';
import Summary from './Pages/CreateNew/Summary';

import './index.css';

import { Provider } from 'react-redux'
import store from './store/store';


const app = document.getElementById('root')

// wrapping/composing
const SingleRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      <Component {...props}/>
  )}/>
)

const NavLayoutRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <NavLayout  {...props}>
      <Component {...props}/>
    </NavLayout>
  )}/>
)


// ReactDOM.render(
// 	<Provider store={store}>
//     <Router>
//       <div>
//         <NavLayoutRoute exact={true} path="/" component={LandingPage}/>
//         <NavLayoutRoute path="/about" component={About}/>
//         <NavLayoutRoute path="/howItWorks" component={HowItWorks}/>
//         <NavLayoutRoute path="/explore" component={Explore}/>
//         <NavLayoutRoute path="/login" component={Login}/>
//         <NavLayoutRoute path="/Create" name="Create" component={CreateNew}/>
//         <NavLayoutRoute path="/profile" name="profile" component={Profile}/>
//     	  <NavLayoutRoute path="/testPage" name="testPage" component={TestPage}/>
//         <LayoutRoute path="/editAppventure/summary" name="editAppventureSummary" component={Summary}/>
//       </div>
//     </Router>
//   </Provider>,
// app);



ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <NavLayoutRoute exact={true} path={urlHost + "/"} component={LandingPage}/>
        <NavLayoutRoute path={urlHost + "/about"} component={About}/>
        <NavLayoutRoute path={urlHost + "/howItWorks"} component={HowItWorks}/>
        <NavLayoutRoute path={urlHost + "/explore"} component={Explore}/>
        <NavLayoutRoute path={urlHost + "/login"} component={Login}/>
        <NavLayoutRoute path={urlHost + "/Create"} name="Create" component={CreateNew}/>
        <NavLayoutRoute path={urlHost + "/profile"} name="profile" component={Profile}/>
        <NavLayoutRoute path={urlHost + "/testPage"} name="testPage" component={TestPage}/>
        <SingleRoute path={urlHost + "/editAppventure/summary"} name="editAppventureSummary" component={Summary}/>
      </div>
    </Router>
  </Provider>,
app);




