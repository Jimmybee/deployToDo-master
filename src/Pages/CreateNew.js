// @flow

import React from "react";
import { Link } from 'react-router-dom'
import { backendless as config, imageUrl } from '../api/Config';
import { fetchQuery } from '../api/Backendless.js';
import { connect } from 'react-redux'
import store from '../store/store';

import AppventureRow from '../Components/Create/AppventureRow';
import './CreateNew/createNew.css'
import { updateReduxAppventureDetails } from '../Actions/Actions.js';


@connect((store) => {
  return {
    appventures: store.appventures
  };
})


export default class CreateNew extends React.Component {
  constructor(props) {
	    super(props);
  }

  componentWillMount() {
  	const state = store.getState()
     if (state.user) {
    	var userId = state.user.objectId
    	var condition = "ownerId =" + "'" + userId + "'"
    	console.log("condition", condition)
      fetchQuery(condition)
  	}
  }

 renderAppventures() {
 	const appventures = this.props.appventures

 	if (appventures.length > 0) { 
 	  const mappedAppventures = appventures.map(appventure => <div key={appventure.objectId}><AppventureRow appventure={appventure} config={config} edit={this.edit.bind(this)}/></div>)

      return mappedAppventures;
    }
  }

  render() {
    return (
      <div className="col-xs-12">
	      <div className="jumbotron">
	        <h1> Create New </h1>
	        <p> Design a new appventure in your city right here and share it with others.</p>
	        <p><Link className="btn btn-primary btn-lg" to="/editAppventure/summary">Start Here</Link></p>
	      </div>
	      {this.renderAppventures()}
	   </div>
    );
  }

  edit(appventure) {
    console.log("update edit with:", appventure)
    updateReduxAppventureDetails(appventure)

    this.props.history.push("/editAppventure/summary");
  }

}
