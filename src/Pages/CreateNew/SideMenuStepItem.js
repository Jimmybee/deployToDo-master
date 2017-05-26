
import React from "react";
import MenuItem from "./MenuItem.js"
 


export default class SideMenuStepItem extends React.Component {
   constructor(props) {
    super(props);
  }


  render() {

    const { expandedStep, stepNumber, showStep, displayedComponent } = this.props;
    console.log(this.props)

    function stepTitle(number) {
      return "Step " + number 
     }

    const expanded = (expandedStep === stepNumber) ? true : false
    var classNames = (expandedStep === stepNumber) ? "sideNavStep selected" : "sideNavStep"


    const stepItems = [{component: "STEP_LOCATION", title: "Location"}, 
                            {component:"STEP_CLUES", title: "Clues"}, 
                            {component:"STEP_ANSWER", title: "Answers"},
                            {component: "STEP_HINTS", title: "Hints"},
                             {component:"STEP_COMPLETION", title: "Complete"}]

    const stepMenuItems = stepItems.map(item =>
              <MenuItem item={item} componentDisplayed={displayedComponent} showStep={this.showStep.bind(this)}/>
      )


    return(
      <li className={classNames}><button className="sideNavListBtn" onClick={this.editStep.bind(this)}>{stepTitle(stepNumber)}</button>
         <Panel collapsible expanded={expanded}>
           <ul className="sideNavUL">
              {stepMenuItems}  
            </ul>
        </Panel>
      </li>
    );
  }

  editStep() {
    const { editStep, stepNumber } = this.props;
    editStep(stepNumber)
  }

  showStep(component){
    const { showStep } = this.props;
    showStep(component)
  }
}


class Panel extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      expanded: this.props.expanded,
    };
  }

  render() {
    const {
      expanded, 
      children } = this.props;

    return(
      <div>
        {expanded === true ? children : null}
      </div>
    );
  }
}