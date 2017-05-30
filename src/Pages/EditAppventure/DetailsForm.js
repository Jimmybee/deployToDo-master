import React, { Component } from 'react';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditAppventure'


class AppventureDetails extends Component {


  render() {
    const times = this.createTimeArray()
    const minutes = this.createMinuteArray()
    const hours = this.createHoursArray()
    const themes = ["Outdoor", "Family", "Puzzle", "Night", "Museum", "Adventurous"]
    const renderSelector = ({classNames, options, option1, input, meta: { touched, error } }) => (
      <div className={classNames}>
        <select {...input}>
          <option value="">{option1}</option>
          {options.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )

   const { handleSubmit } = this.props;
    return (
      <div className="summaryComponent">
      <div className="">
      <form onSubmit={handleSubmit} className="form-horizontal">
        <div className="form-group">
          <h4 htmlFor="title">Use a head line to give a short overview of your appventure:</h4>
          <Field name="title" component="input" type="text" placeholder="Title" className="form-control"/>
        </div>
        <div className="form-group">
          <h4 htmlFor="description">Write a paragraph or two to give an in depth review of your appventure:</h4>
          <Field name="description" component="textarea" placeholder="Description" className="form-control"/>
        </div>
        <div className="form-group">
           <h4>Add a theme to help people to discover your appventure:</h4>
           <Field name="themeOne" options={themes} option1="Primary Theme" component={renderSelector}/> 
           <Field name="themeTwo" options={themes} option1="Secondary Theme" component={renderSelector}/>
        </div>
        <div className="form-group">
            <h4>Are some parts of the route time restricted?</h4>
            <h4>What are the ealiest & latest start times that you recommend?</h4>
           <Field name="startTime" options={times} option1="Earliest Start Time" component={renderSelector}/>
           <Field name="endTime" options={times} option1="Latest Start Time" component={renderSelector}/> 
        </div>
        <div className="form-group">
           <h4>What is the estimated time to complete?</h4> 
           <Field name="minutes" option1="Minutes" options={minutes} component={renderSelector} className="form-control"/>
           <Field name="hours" option1="Hour" options={hours} component={renderSelector} className="form-control"/>
        </div>
         <button className="Save-Continue" type="submit">Save & Continue</button>
      </form>
      </div>
      </div>
    );
  }

  createTimeArray(){
    var x = 30; //minutes interval
    var times = []; // time array
    var tt = 0; // start time
    var ap = ['AM', 'PM']; // AM-PM

    //loop to increment the time and push results in array
    for (var i=0;tt<24*60; i++) {
      var hh = Math.floor(tt/60); // getting hours of day in 0-24 format
      var mm = (tt%60); // getting minutes of the hour in 0-55 format
      times[i] = ("0" + (hh % 12)).slice(-2) + ':' + ("0" + mm).slice(-2) + ap[Math.floor(hh/12)]; // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }

    return times
  }

  createMinuteArray(){
    var x = 5; //minutes interval
    var times = []; // time array
    var tt = 0; // start time

    //loop to increment the time and push results in array
    for (var i=0;tt<60; i++) {
      var mm = (tt%60); // getting minutes of the hour in 0-55 format
      times[i] = (("0" + mm).slice(-2)); // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }

    return times
  }

  createHoursArray(){
    var x = 1; //minutes interval
    var times = []; // time array
    var tt = 0; // start time

    //loop to increment the time and push results in array
    for (var i=0;tt<24; i++) {
      times[i] = ("0" + tt).slice(-2); // pushing data in array in [00:00 - 12:00 AM/PM format]
      tt = tt + x;
    }

    return times
  }
}

// Decorate the form component
AppventureDetails = reduxForm({
  form: 'contact' // a unique name for this form
})(AppventureDetails);

// You have to connect() to any reducers that you wish to connect to yourself
AppventureDetails = connect(
  state => ({
    initialValues: state.editAppventure
  }),
  { load: load }               // bind account loading action creator
)(AppventureDetails)

export default AppventureDetails;



class LabelSelect extends React.Component {
   constructor(props, context) {
    super(props, context);
  }

  render() {
    const {
      options,
      classNames,
      option1,
      name,
      component } = this.props;

    return(
      <div className={classNames}>
        <Field options={options} option1={option1} name={name} component={component} className="form-control"/>
       </div>
    );
  }
}

//         <label> {labelTitle} </label>
