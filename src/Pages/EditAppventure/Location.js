import './location.css';


import React, { Component } from 'react';
import { Field, reduxForm, change, reset } from 'redux-form';
import { connect } from 'react-redux'

import { load } from '../../reducers/EditAppventure'
import AutoCompleteMap from '../../Components/Common/AutoCompleteMap.js';
import { createGeoPoint } from '../../api/Backendless.js'
import { updateReduxAppventureDetails } from '../../Actions/Actions';

class Location extends Component {

//         <label>{input.value.latitude}</label>
        // <label>{input.value.longitude}</label>

  render() {

    const { handleSubmit, appventure } = this.props;

     const renderDiv = ({ input, meta: { touched, error } }) => (
      <div>
      </div>
    )

    return (
      <div className="AppventureLocation fluid-container">
        <div className="row">
        <h1>Setup location for this Step</h1>
        <form onSubmit={handleSubmit} className="form-horizontal summaryComponent col-xs-10">
          <div className="form-group">
            <label htmlFor="startingLocationName">Location Name</label>
            <Field name="startingLocationName" component="input" type="text" placeholder="Location Name" className="form-control"/>
            <Field name="location" component={renderDiv} className="form-control"/>
          </div>
          <button className="Save-Continue offsetTop50" type="submit">Save & Continue</button>
        </form>
        <div className="Spacer">
        </div>
        <div className="MapContainer">
          <AutoCompleteMap placeFound={this.placeFound.bind(this)} initialLocation={appventure.location}/>
        </div>
        </div>
      </div>
    );
  }


  placeFound(place) {
    const change = this.props.change;
    let geoPoint = createGeoPoint(place)
    // var appventure = {}
    // appventure.location = geoPoint
    // reset("location")

    change("location", geoPoint)
  }
}


// Decorate the form component
Location = reduxForm({
  form: 'location' // a unique name for this form
})(Location);

// You have to connect() to any reducers that you wish to connect to yourself
Location = connect(
  state => ({
    initialValues: state.editAppventure
  }),
  { load: load }               // bind account loading action creator
)(Location)

export default Location;

