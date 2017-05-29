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

  renderHints(){

   
  }
  
  render() {
    const { handleSubmit } = this.props;

    const penalties = ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]
    const renderHintPenalty = ({ input, meta: { touched, error } }) => (
      <div className="SelectField">
        <label>Hint penalty(seconds):</label>
        <select {...input}>
          {penalties.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )

    const freeHintOptions = ["All", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    const renderFreeHints = ({ input, meta: { touched, error } }) => (
      <div className="SelectField">
        <label>Free hints:</label> 
        <select {...input}>
          {freeHintOptions.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )

    const renderField = ({ input, label, type, meta: { touched, error } }) => (
      <div className="InLineBlock">
        <label>{label +":"}</label>
         <input {...input} type={type} placeholder={label}/>
      </div>
    )

    const renderHintList = ({ fields, meta: { touched, error } }) => (
      <div className="FieldArray">
      <ul>
        {fields.map((field, index) =>
          <li key={index}>
            <Field
              name={field + "hint"}
              type="text"
              component={renderField}
              label={`Hint #${index + 1}`}/>
            <button
                className="deleteField"
                type="button"
                title="Remove Hint"
                onClick={() => fields.remove(index)}><i className="fa fa-times" aria-hidden="true"></i></button>
          </li>
        )}
        {error && <li className="error">{error}</li>}
      </ul>
      <button className="addField" type="button" onClick={() => fields.push()}>Add Hint</button>
      </div>
    )

    return(
      
      <div className="Hints">
       <h4>Set hints for this step</h4>
        <hr/>
        <form onSubmit={handleSubmit}>
          <div>
             <Field name="hintPenalty" component={renderHintPenalty}/>
             <Field name="freeHints" component={renderFreeHints}/> 
          </div>
          <FieldArray name="hints" component={renderHintList}/>
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

    return {
      checkIn,
    }
  }
)(StepAnswer)