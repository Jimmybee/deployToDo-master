import React, { Component } from 'react';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditStep'

import Switch from '../../Components/Common/Switch.js';

// CheckIn/Text Answer Distance/Answers
export default class StepAnswer extends Component {
  constructor(props) {
    super(props);
  }

  renderAnswersField(){
    console.log(this.props.checkIn)
    if (this.props.checkIn === true) {
      return (<Field name="title" component="input" type="text" placeholder="Title" className="form-control"/>);
    } else {
      return (<label>Not ww</label>);
    }
  }
  
  render() {
     const renderButton = ({ input, meta: { touched, error } }) => (
        <button onClick={() => input.onChange(true)}> Check In </button>
      )

     const renderWrittenAnswer = ({ input, meta: { touched, error } }) => (
        <button onClick={() => input.onChange(false)}> Written Answer </button>
    )


    return(
      <div>
          <Field name="setup[checkIn]" component={renderButton}/>
          <Field name="setup[checkIn]" component={renderWrittenAnswer}/>
          {this.renderAnswersField()}
      </div>
    );
  }


}

// Decorate the form component
StepAnswer = reduxForm({
  form: 'stepAnswer' // a unique name for this form
})(StepAnswer);

// You have to connect() to any reducers that you wish to connect to yourself
StepAnswer = connect(
  state => ({
    initialValues: state.editStep,
  }),
  { load: load }               // bind account loading action creator
)(StepAnswer)


// Decorate with connect to read form values
const selector = formValueSelector('stepAnswer') // <-- same as form name
StepAnswer = connect(
  state => {
    const checkIn = selector(state, 'setup[checkIn]')

    return {
      checkIn,
    }
  }
)(StepAnswer)