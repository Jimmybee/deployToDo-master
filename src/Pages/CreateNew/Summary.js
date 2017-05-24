// @flow

import React from "react";
import { Link } from 'react-router-dom'


import store from '../../store/store';
import { imageUrl } from '../../api/Config';
import { setEditStep, addNewStep } from '../../Actions/Actions.js';
import { updateBackendlessAppventureDetails, updateBackendlessAppventureWithSteps } from '../../api/Backendless.js';

// import EditAppventureDetails from "./EditAppventureDetails";
import AppventureSummary from "../EditAppventure/AppventureSummary";
import EditAppventureImage from "../EditAppventure/EditAppventureImage";
import AppventureDetailsForm from "../EditAppventure/DetailsForm";
import Location from "../EditAppventure/Location";

import StepAnswer from "../EditStep/StepAnswer";
import StepClues from "../EditStep/StepClues";
import StepCompletion from "../EditStep/StepCompletion";
import StepHints from "../EditStep/StepHints";
import StepLocation from "../EditStep/StepLocation";

import SideMenuStepItem from "./SideMenuStepItem.js"


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
	      stepOpen: 0,
        collapsed: true,
	    };
	  }

  renderStepMenuItems() {
    if (typeof this.props.editAppventure.steps === 'undefined') {
        return null
   	 }

  	 const steps = this.props.editAppventure.steps
  	 const sortedSteps = steps.sort(function (a, b) {
  			return a.stepNumber - b.stepNumber;
		});

  	 
  	 const sortedStepsListItems = sortedSteps.map(step =>
			<SideMenuStepItem 
			key={step.stepNumber} 
			expandedStep={this.state.stepOpen} 
			stepNumber={step.stepNumber} 
			editStep={this.editStep.bind(this)}
			showStep={this.showStep.bind(this)}
      displayedComponent={this.state.displayComponent}
			/>
  	 	)

  	 return (
	    <ul className="sideNavUL">
	      {sortedStepsListItems}
	    </ul>
  	 );
  }

  render() {

  const displayComponent = this.state.displayComponent;
  const appventure = this.props.editAppventure;
  const submitStep = this.submitStep.bind(this);
  const submit = this.submit.bind(this);
  const sideOpen = this.state.collapsed ? "" : "open";

  
  const getComponent = function(displayComponent) {   
  	switch (displayComponent) {
      case 'APPVENTURE_SUMMARY':
        return <AppventureSummary appventure={appventure}/>
  		case 'DETAILS':
	      return <AppventureDetailsForm appventure={appventure} onSubmit={submit}/>
	    case 'IMAGE':
	      return <EditAppventureImage appventure={appventure} onSubmit={submit}/>
	    case 'LOCATION':
	      return <Location appventure={appventure} onSubmit={submit}/>
	    case 'STEP_ANSWER':
	      return <StepAnswer onSubmit={submitStep}/>
	    case 'STEP_LOCATION':
	      return <StepLocation onSubmit={submitStep}/>
	    case 'STEP_CLUES':
	      return <StepClues onSubmit={submitStep}/>
	    case 'STEP_HINTS':
	      return <StepHints onSubmit={submitStep}/>
	    case 'STEP_COMPLETION':
	      return <StepCompletion onSubmit={submitStep}/>
	    default:
	      return <h1>404</h1>
	  }
	}

	const component = getComponent(displayComponent)


    return (
    <div className="fluid-container">
      <div>
	      <div className={"navMenuWrapper transition " + sideOpen}>
	      	<div className="navScroller">
            <button type="button" className="closeMenu" onClick={this.toggleCollapse.bind(this)}> X </button>
	      		<button type="button" onClick={() => this.showComponent("APPVENTURE_SUMMARY").bind(this)}><h4>Appventure Summary</h4></button>
		        <ul className="sideNavUL">
		        	<li className="sideNavListItem selected"><button className="sideNavListBtn" onClick={this.showDetails.bind(this)}>Details</button></li>
		        	<li className="sideNavListItem"><button className="sideNavListBtn" onClick={this.showImage.bind(this)}>Image</button></li>
		        	<li className="sideNavListItem"><button className="sideNavListBtn" onClick={this.showLocation.bind(this)}>Location</button></li>
		        </ul>
		        <h4>Steps</h4>
		        {this.renderStepMenuItems()}
            <ul className="sideNavUL">
              <li className="sideNavListItem"><button type="button" className="sideNavListItem" onClick={this.addStep.bind(this)}> Add Step </button></li>
            </ul>
	      	</div>
	      </div>
      </div>
      <div className="col-xs-12 col-sm-9 col-sm-offset-3 componentContainer transition">
	      <div className="summaryHeader col-xs-12">
          <button type="button" className="toggle" onClick={this.toggleCollapse.bind(this)} >
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
          </button>
	        <p><Link className="btn btn-default pull-right" to="/create">Save & Exit</Link></p>
	      </div>
	      <div className="col-xs-12">
	      	{component}
	      </div> 
      </div>
    </div>
    );
  }

  showComponent(name) {
    this.setState({
      displayComponent: name,
    })
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

  showLocation() {
  	this.setState({
  		displayComponent: "LOCATION",
  	})
  }


  editStep(stepNumber) {
    this.setState({stepOpen: stepNumber});
  	const state =  store.getState();
  	const step = state.editAppventure.steps[stepNumber - 1]
  	setEditStep(step)
  }

  showStep(component) {
  	this.setState({
  		displayComponent: component,
  	})
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  addStep() {
    addNewStep(1)
  }

  submit(values) {
	
  	const state =  store.getState();
   	console.log("New Edit = ",state.editAppventure);
  	console.log("values = ", values);

  	updateBackendlessAppventureDetails(state.editAppventure, values)

  }

  submitStep(values) {
    const state =  store.getState();
    var appventure = {};
    appventure.objectId = state.editAppventure.objectId;
    appventure.steps = [values]
    updateBackendlessAppventureWithSteps(appventure)
  }


}



