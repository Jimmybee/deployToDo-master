import React, { Component } from 'react';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditStep'
import store from '../../store/store';

import Switch from '../../Components/Common/Switch.js';

export default class StepClues extends Component {
  constructor(props) {
    super(props);
  }

  renderTextField(){
    const { textClue } = this.props;
    console.log(textClue);

    if (textClue === true) {
      return (<Field name="initialText" component="textarea" className="form-control"/>);
    } else {
      return null;
    }
  }

  render() {

    function switchComponent(fieldName, switchName, handleEnabled) {
      return ({ input, meta: { touched, error } }) => (
          <Switch fieldName={fieldName} handleEnabled={handleEnabled} input={input} switchName={switchName} className="pull-right"/>
       )
    }
	  

    return(
      <div>
         <Field name="setup[textClue]" component={switchComponent("setup[textClue]", "Text Clue:", this.handleEnabled.bind(this))} className="form-control"/>
         <Field name="setup[imageClue]" component={switchComponent("setup[imageClue]", "Image Clue:", this.handleEnabled.bind(this))} className="form-control"/>
         <Field name="setup[soundClue]" component={switchComponent("setup[soundClue]", "Sound Clue:", this.handleEnabled.bind(this))} className="form-control"/>
         {this.renderTextField()}
      </div>
    );
  }

  handleEnabled(enabled, fieldName) {
    const change = this.props.change;
    change(fieldName, enabled)
  }

}

// Decorate the form component
StepClues = reduxForm({
  form: 'stepClues' // a unique name for this form
})(StepClues);

// You have to connect() to any reducers that you wish to connect to yourself
StepClues = connect(
  state => ({
    initialValues: state.editStep
  }),
  { load: load }               // bind account loading action creator
)(StepClues)

// Decorate with connect to read form values
const selector = formValueSelector('stepClues') // <-- same as form name
StepClues = connect(
  state => {
    // can select values individually
    const textClue = selector(state, 'setup[textClue]')
    // const favoriteColorValue = selector(state, 'favoriteColor')
    // or together as a group
    // const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      textClue,
      // favoriteColorValue,
      // fullName: `${firstName || ''} ${lastName || ''}`
    }
  }
)(StepClues)
