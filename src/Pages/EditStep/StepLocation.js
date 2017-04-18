import React, { Component } from 'react';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditStep'

import Switch from '../../Components/Common/Switch.js';
import AutoCompleteMap from '../../Components/Common/AutoCompleteMap.js';
import { createGeoPoint } from '../../api/Backendless.js'

export default class StepLocation extends Component {
  constructor(props) {
    super(props);
  }

  renderMap(){
      const { isLocation } = this.props;
      const initialLocation = this.props.initialValues.location

      const renderLocation = ({ input, meta: { touched, error } }) => (
        <div>
          <label>{input.value.latitude}</label>
          <label>{input.value.longitude}</label>
        </div>
      )

      if (isLocation === true) {
        return (
          <div>
           <Field name="location" component={renderLocation} className="form-control"/>
           <AutoCompleteMap placeFound={this.placeFound.bind(this)} initialLocation={initialLocation} />
          </div>
        );
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
         <Field name="setup[isLocation]" component={switchComponent("setup[isLocation]", "Enable Location:", this.handleEnabled.bind(this))} className="form-control"/>
         {this.renderMap()}
      </div>
    );
  }

  handleEnabled(enabled, fieldName) {
    const change = this.props.change;
    change(fieldName, enabled)
  }

  placeFound(place) {
    const change = this.props.change;
    let geoPoint = createGeoPoint(place)

    change("location", geoPoint)
  }

}

// Decorate the form component
StepLocation = reduxForm({
  form: 'stepLocation' // a unique name for this form
})(StepLocation);

// You have to connect() to any reducers that you wish to connect to yourself
StepLocation = connect(
  state => ({
    initialValues: state.editStep,
  }),
  { load: load }               // bind account loading action creator
)(StepLocation)


// Decorate with connect to read form values
const selector = formValueSelector('stepLocation') // <-- same as form name
StepLocation = connect(
  state => {
    // can select values individually
    const isLocation = selector(state, 'setup[isLocation]')
    // const favoriteColorValue = selector(state, 'favoriteColor')
    // or together as a group
    // const { firstName, lastName } = selector(state, 'firstName', 'lastName')
    return {
      isLocation,
      // favoriteColorValue,
      // fullName: `${firstName || ''} ${lastName || ''}`
    }
  }
)(StepLocation)