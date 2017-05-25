// @flow

import { urlHost } from '../../commonConstants'


import React from "react";
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { backendless as config, imageUrl } from '../../api/Config';
import { fetchOwned } from '../../api/Backendless.js';
import store from '../../store/store';

import AppventureRow from '../../Components/Create/AppventureRow';
import WhyCreate from './Components/WhyCreate/WhyCreate'


import './createNew.css'
import { updateReduxAppventureDetails } from '../../Actions/Actions.js';


@connect((store) => {
  return {
    appventures: store.ownedAppventures
  };
})


export default class CreateNew extends React.Component {
  constructor(props) {
	    super(props);
  }

 renderSpinner() {
     return (
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
      )
  }

  componentWillMount() {
  	const state = store.getState()
     if (state.user) {
    	var userId = state.user.objectId
      fetchOwned(userId)
  	}
  }

 renderAppventures() {
 	const appventures = this.props.appventures
  const state = store.getState()

  if (state.user) {
   	if (appventures.length > 0) { 
   	    const mappedAppventures = appventures.map(appventure => <div key={appventure.objectId}><AppventureRow appventure={appventure} config={config} edit={this.edit.bind(this)}/></div>)
        return mappedAppventures;
      } else {
         return (this.renderSpinner());
      }
    }
  }

  render() {
    return (
      <div className="col-xs-12">
	      <div className="jumbotron">
          <p><Link className="btn buttonA" to={urlHost + "/editAppventure/summary"}>Get Started</Link></p>
	        <h1> Make Your Own Appventure </h1>
	        <p> Design a new appventure in your city right here and share it with others.</p>
	      </div>
        {this.renderAppventures()}
        <WhyCreate />
	   </div>
    );
  }

  edit(appventure) {
    console.log("update edit with:", appventure)
    updateReduxAppventureDetails(appventure)
    const summary = urlHost + "/editAppventure/summary"
    this.props.history.push(summary);
  }

}
