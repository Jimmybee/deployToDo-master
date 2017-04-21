import React, { Component } from 'react';
import { Field, FieldArray, reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditStep'

import Switch from '../../Components/Common/Switch.js';

// CheckIn/Text Answer Distance/Answers
export default class StepAnswer extends Component {
  constructor(props) {
    super(props);
  }

  renderAnswersField(){
    const proximities = ["Any", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]
    const renderProximitySelector = ({ input, meta: { touched, error } }) => (
      <div>
        <select {...input}>
          {proximities.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div>
        <label>{label +":"}</label>
          <input {...input} type={type} placeholder={label}/>
          {touched && error && <span>{error}</span>}
      </div>
    )

    const renderAnswers = ({ fields, meta: { touched, error } }) => (
      <ul>
        <li>
          <button type="button" onClick={() => fields.push()}>Add Answer</button>
        </li>
        {fields.map((anwser, index) =>
          <li key={index}>
            <button
              type="button"
              title="Remove Hobby"
              onClick={() => fields.remove(index)}/>
            <Field
              name={anwser}
              type="text"
              component={renderField}
              label={`Answer #${index + 1}`}/>
          </li>
        )}
        {error && <li className="error">{error}</li>}
      </ul>
    )

    if (this.props.checkIn === true) {
       return (
        <div>
          <label> Proximity: </label>
          <Field name="checkInProximity" component={renderProximitySelector}/> 
          <label> meters </label>
        </div>
       );
    } else {
      return (
        <div>
          <label>Accepted Answers</label>
          <FieldArray name="answerText" component={renderAnswers}/>
        </div>
        );
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