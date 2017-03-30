// @flow

import React from "react";

import EditAppventureDetails from "./EditAppventureDetails";
import EditAppventureImage from "./EditAppventureImage";

import './Summary.css'

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
  console.log(displayComponent)
  const getComponent = function(displayComponent) {   
  	switch (displayComponent) {
  		case 'DETAILS':
	      return <EditAppventureDetails appventure={appventure}/>
	    case 'IMAGE':
	      return <EditAppventureImage/>
	    default:
	      return <h1>404</h1>
	  }
	}

	const component = getComponent(displayComponent)


    return (
    <div className="row">
      <div className="col-xs-1 col-sm-2">
	      <div className="navMenuWrapper">
	      	<div className="navScroller">
		        <ul>
		        	<li><button onClick={this.showDetails.bind(this)}>Details</button></li>
		        	<li><button onClick={this.showImage.bind(this)}>Image</button></li>
		        	<li>List</li>
		        	<li>List</li>
		        	<li>List</li>
		        	<li>List</li>
					<li>List</li>
		        	<li>List</li>
		        	<li>List</li>
		        	<li>List</li>
		        	<li>List</li>
		        	<li>Last</li>
		        </ul>
	      	</div>
	      </div>
      </div>
      <div className="col-xs-11 col-sm-10">
      	{component}
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
}
