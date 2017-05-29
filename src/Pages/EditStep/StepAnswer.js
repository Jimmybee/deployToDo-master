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

    const { change, location } = this.props;
    console.log(location)

    const proximities = ["Any", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]
    const renderProximitySelector = ({ input, meta: { touched, error } }) => (
      <div>
        <select {...input}>
          {proximities.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        <label> meters </label>
        {touched && error && <span>{error}</span>}
      </div>
    )

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div className="InLineBlock">
        <label>{label +":"}</label>
         <input {...input} type={type} placeholder={label}/>
      </div>
    )

    const renderAnswers = ({ fields, meta: { touched, error } }) => (
      <div>
        <ul>
          {fields.map((anwser, index) =>
            <li key={index}>
              <Field
                name={anwser + "answer"}
                type="text"
                component={renderField}
                label={`Answer #${index + 1}`}/>
              <button
                className="deleteField"
                type="button"
                title="Remove Answer"
                onClick={() => fields.remove(index)}><i className="fa fa-times" aria-hidden="true"></i></button>
            </li>
          )}
          {error && <li className="error">{error}</li>}
        </ul>
         <button className="addField" type="button" onClick={() => fields.push()}>Add Answer</button>
      </div>
    )

    if (this.props.checkIn === true) {
       return (
        <div className="CheckIn">
          <label> Proximity: </label>
          <Field name="checkInProximity" component={renderProximitySelector}/> 
        </div>
       );
    } else {
      return (
        <div className="Answers">
          <label>Accepted Answers</label>
          <FieldArray name="answers" component={renderAnswers}/>
        </div>
        );
    }
  }
  
  render() {
     const {checkIn } = this.props 
     const checkInClass = checkIn === true ? "selected" : "unSelected"
     const answersClass = checkIn === true ? "unSelected" : "selected"

     const renderCheckIn = ({ input, meta: { touched, error } }) => (
        <button className={checkInClass} onClick={() => input.onChange(true)}> Check In </button>
      )

     const renderWrittenAnswer = ({ input, meta: { touched, error } }) => (
        <button className={answersClass} onClick={() => input.onChange(false)}> Written Answer </button>
    )
     
    const { handleSubmit } = this.props;


    return(
      
      <div>
        <h4>Set Answers or Check-In for this Step</h4>
        <hr/>
        <form className="AnswersForm" onSubmit={handleSubmit}>
          <Field name="setup[checkIn]" component={renderCheckIn}/>
          <Field name="setup[checkIn]" component={renderWrittenAnswer}/>
          {this.renderAnswersField()}
          <button className="Save-Continue" type="submit">Save & Continue</button>  
        </form>
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
    const location = selector(state, 'location')

    return {
      checkIn,
      location
    }
  }
)(StepAnswer)