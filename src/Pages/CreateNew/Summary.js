// @flow

import React from "react";
import { Link } from 'react-router-dom'


import store from '../../store/store';
import { imageUrl } from '../../api/Config';
import { setEditStep, addNewStep } from '../../Actions/Actions.js';
import { updateBackendlessAppventureDetails, updateBackendlessAppventureWithSteps, updateSingleStep } from '../../api/Backendless.js';

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
import MenuItem from "./MenuItem.js"

import HelpBox from "../../Components/Common/HelpBox/HelpBox.js"

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
	      displayComponent: "IMAGE",
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
	    <ul className="sideNavUL transition">
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
  const appventurePreviewItem = {component: "APPVENTURE_SUMMARY", title: "Appventure"}
  //choose selected className as selected if equal no any of the first 4 components.
  const appventureSubItems = [{component: "IMAGE", title: "Image"}, 
                            {component:"DETAILS", title: "Details"}, 
                            {component:"LOCATION", title: "Location"}]
    const appventureSubMenuClassName = (this.state.stepOpen === 0) ? "" : "hidePanel"
    const appventureTopMenuClassName = (this.state.stepOpen === 0) ? "selected" : ""

    const appventureSubMenuItems = appventureSubItems.map(item =>
              <MenuItem key={item.component} item={item} componentDisplayed={displayComponent} showStep={this.showStep.bind(this)}/>
    )


    return (
      <div>
    <div className="row">
      <div className="col-sm-3 xsRemove">
	      <div className={"navMenuWrapper transition " + sideOpen}>
	      	<div className="navScroller">
            <button type="button" className="closeMenu" onClick={this.toggleCollapse.bind(this)}> X </button>
            <ul className="sideNavUL">
                <li className={appventureTopMenuClassName}>
                  <button className={"sideNavListBtn"} onClick={() => this.showStep("APPVENTURE_SUMMARY")}>Appventure</button>
               </li>
            <ul className={"sideNavSubUl " + appventureSubMenuClassName}>
                <div className="verticalLine"/>
                {appventureSubMenuItems}
              </ul>
            </ul>
		        {this.renderStepMenuItems()}
            <ul className="sideNavUL">
              <li className="sideNavListItem"><button type="button" className="sideNavListItem" onClick={this.addStep.bind(this)}> Add Step </button></li>
            </ul>
	      	</div>
	      </div>
      </div>
      <div className="col-xs-12 col-sm-9 componentContainer transition">
	      <div className="summaryHeader col-xs-12">
          <button type="button" className="toggle" onClick={this.toggleCollapse.bind(this)} >
             <span className="sr-only">Toggle navigation</span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
             <span className="icon-bar"></span>
          </button>
	      </div>
	      <div className="col-xs-12">
	      	{component}
	      </div> 
      </div>
    </div>
    <div className="row">
      <HelpBox text="This is aosme fogoijsa m snldks"/>
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
    switch (component) {
      case 'APPVENTURE_SUMMARY':
       this.setState({stepOpen: 0});
      default:

    }

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
    console.log(values)
    // updateSingleStep()

    appventure.objectId = state.editAppventure.objectId;
    appventure.steps = [values]
    updateBackendlessAppventureWithSteps(appventure)
  }


}


//          <p><Link className="btn btn-default pull-right" to="/create">Save & Exit</Link></p>



