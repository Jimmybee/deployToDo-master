
import React from "react";



export default class SideMenuStepItem extends React.Component {
   constructor(props) {
    super(props);
  }


  render() {

    const { expandedStep, stepNumber } = this.props;
    console.log(this.props)

    function stepTitle(number) {
      return "Step " + number 
     }

    const expanded = (expandedStep === stepNumber) ? true : false

    return(
      <li className="sideNavListItem"><button className="sideNavListBtn" onClick={this.editStep.bind(this)}>{stepTitle(stepNumber)}</button>
         <Panel collapsible expanded={expanded}>
           <ul className="sideNavUL">
              <li className="sideNavListItem"><button className="sideNavListBtn" onClick={() => this.showStep("STEP_LOCATION")}>Location</button></li>
              <li className="sideNavListItem"><button className="sideNavListBtn" onClick={() => this.showStep("STEP_CLUES")}>Clues</button></li>
              <li className="sideNavListItem"><button className="sideNavListBtn" onClick={() => this.showStep("STEP_ANSWER")}>Answers</button></li>
              <li className="sideNavListItem"><button className="sideNavListBtn" onClick={() => this.showStep("STEP_HINTS")}>Hints</button></li>
              <li className="sideNavListItem"><button className="sideNavListBtn" onClick={() => this.showStep("STEP_COMPLETION")}>Completion</button></li>
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
        {expanded === true ? <label> {children} </label> : null}
      </div>
    );
  }
}