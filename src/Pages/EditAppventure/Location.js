import React, { Component } from 'react';
import { Field, reduxForm, change, reset } from 'redux-form';
import { connect } from 'react-redux'

import { load } from '../../reducers/EditAppventure'
import AutoCompleteMap from '../../Components/Common/AutoCompleteMap.js';
import { createGeoPoint } from '../../api/Backendless.js'
import { updateReduxAppventureDetails } from '../../Actions/Actions';

class Location extends Component {



  render() {

    const { handleSubmit, appventure } = this.props;

     const renderDiv = ({ input, meta: { touched, error } }) => (
      <div>
        <label>{input.value.latitude}</label>
        <label>{input.value.longitude}</label>
      </div>
    )

    return (
      <div>
        <form onSubmit={handleSubmit} className="form-horizontal summaryComponent">
          <div className="form-group">
            <label htmlFor="startingLocationName">Location Name</label>
            <Field name="startingLocationName" component="input" type="text" placeholder="Location Name" className="form-control"/>
            <Field name="location" component={renderDiv} className="form-control"/>
          </div>
           <button type="submit">Submit</button>
        </form>
        <AutoCompleteMap placeFound={this.placeFound.bind(this)} initialLocation={appventure.location}/>
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

