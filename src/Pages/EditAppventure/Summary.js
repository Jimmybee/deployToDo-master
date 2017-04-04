// @flow

import React from "react";

// import EditAppventureDetails from "./EditAppventureDetails";
import EditAppventureImage from "./EditAppventureImage";
import AppventureDetailsForm from "./DetailsForm";
import { updateAppventureDetails, editAppventureTitle } from '../../Actions/Actions.js';
import { updateBackendlessAppventureDetails } from '../../api/Backendless.js';
import store from '../../store/store';


import './Summary.css';

import { connect } from 'react-redux'
@connect((store) => {
  return {
    editAppventure: store.editAppventure
  };
})

export default class Summary extends React.Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      displayComponent: "DETAILS",
	    };
	  }

  render() {

  const displayComponent = this.state.displayComponent
  const appventure = this.props.editAppventure
  const submitFunciton = this.submit.bind(this)
  const getComponent = function(displayComponent) {   
  	switch (displayComponent) {
  		case 'DETAILS':
	      return <AppventureDetailsForm appventure={appventure} onSubmit={submitFunciton}/>
	    case 'IMAGE':
	      return <EditAppventureImage/>
	    default:
	      return <h1>404</h1>
	  }
	}

	const component = getComponent(displayComponent)


    return (
    <div className="fluid-container">
      <div className="col-xs-1 col-sm-2 summaryColumnBlue">
	      <div className="navMenuWrapper">
	      	<div className="navScroller">
	      		<label>Appventure</label>
		        <ul className="sideNavUL">
		        	<li className="sideNavListItem"><button className="sideNavListBtn" onClick={this.showDetails.bind(this)}>Details</button></li>
		        	<li className="sideNavListItem"><button className="sideNavListBtn" onClick={this.showImage.bind(this)}>Image</button></li>
		        </ul>
		        <label>Steps</label>
		        <ul className="sideNavUL">
		        	<li className="sideNavListItem">Step One</li>
		        	<li className="sideNavListItem">Step Two</li>
		        	<li className="sideNavListItem">Step Three</li>
		        	<li className="sideNavListItem">List</li>
					<li className="sideNavListItem">List</li>
		        	<li className="sideNavListItem">List</li>
		        	<li className="sideNavListItem">List</li>
		        	<li className="sideNavListItem">List</li>
		        	<li className="sideNavListItem">List</li>
		        	<li className="sideNavListItem">Last</li>
		        </ul>
	      	</div>
	      </div>
      </div>
      <div className="col-xs-11 col-sm-10">
	      <div className="col-xs-12">
	      	<button className="btn btn-default pull-right"> Save & Exit </button>
	      </div>
	      <div className="summaryComponent col-xs-12">
	      	{component}
	      </div> 
      </div>
    </div>
    );
  }

  showDetails() {
  	this.setState({
  		displayComponent: "DETAILS",
  	})
  }

  showImage() {
  	this.setState({
  		displayComponent: "IMAGE",
  	})
  }

  submit(values) {
  	console.log("values", values)

  	function updatedStore() {
  	}

  	updateAppventureDetails(values)
  	console.log("Updated", store.getState());

  }

}
