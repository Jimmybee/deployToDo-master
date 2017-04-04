import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditAppventure'


class AppventureDetails extends Component {


  render() {
    const themes = ["Outdoor", "Family", "Puzzle", "Night", "Museum", "Adventurous"]
    const renderThemeSelector = ({ input, meta: { touched, error } }) => (
      <div className="summaryThemeDiv">
        <select {...input}>
          <option value="">Select a time...</option>
          {themes.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )

    const times = this.createTimeArray()
    const renderTimeSelector = ({ input, meta: { touched, error } }) => (
      <div className="summaryThemeDiv">
        <select {...input}>
          <option value="">Select a time...</option>
          {times.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )

    const minutes = this.createMinuteArray()
    const renderMinuteSelector = ({ input, meta: { touched, error } }) => (
      <div>
        <label> Minutes: </label>
        <select {...input}>
          <option value="">Select minutes...</option>
          {minutes.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )

    const hours = this.createHoursArray()
    const renderHourSelector = ({ input, meta: { touched, error } }) => (
      <div>
        <label> Hours: </label>
        <select {...input}>
          <option value="">Select hours...</option>
          {hours.map(val => <option value={val} key={val}>{val}</option>)}
        </select>
        {touched && error && <span>{error}</span>}
      </div>
    )



   const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className="form-horizontal summaryComponent">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" placeholder="Title" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="locationName">Location Name</label>
          <Field name="locationName" component="input" type="text" placeholder="Location Name" className="form-control"/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Field name="description" component="textarea" placeholder="Description" className="form-control"/>
        </div>
        <div className="form-group">
           <LabelSelect name="themeOne" labelTitle="Theme One" component={renderThemeSelector} classNames="col-xs-6"/> 
           <LabelSelect name="themeTwo" labelTitle="Theme Two" component={renderThemeSelector} classNames="col-xs-6"/>
           <LabelSelect name="startTime" labelTitle="Eariler start time:" component={renderTimeSelector} classNames="col-xs-6"/>
           <LabelSelect name="endTime" labelTitle="Latest finish time:" component={renderTimeSelector} classNames="col-xs-6"/>    
           <Field name="minutes" component={renderMinuteSelector} className="form-control"/>
           <Field name="hours" component={renderHourSelector} className="form-control"/>
        </div>
         <button type="submit">Submit</button>
      </form>
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
      classNames,
      labelTitle,
      name,
      component } = this.props;

    return(
      <div className={classNames}>
        <label> {labelTitle} </label>
        <Field name="themeTwo" component={component} className="form-control"/>
       </div>
    );
  }
}