import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditAppventure'
import AutoCompleteMap from '../../Components/Common/AutoCompleteMap.js';


class Location extends Component {


  render() {

    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit} className="form-horizontal summaryComponent">
          <div className="form-group">
            <label htmlFor="startingLocationName">Location Name</label>
            <Field name="startingLocationName" component="input" type="text" placeholder="Location Name" className="form-control"/>
          </div>
           <button type="submit">Submit</button>
        </form>
        <AutoCompleteMap placeFound={this.placeFound}/>
      </div>
    );
  }

  placeFound() {
    console.log("passed function")
  }
}



// Decorate the form component
Location = reduxForm({
  form: 'contact' // a unique name for this form
})(Location);

// You have to connect() to any reducers that you wish to connect to yourself
Location = connect(
  state => ({
    initialValues: state.editAppventure
  }),
  { load: load }               // bind account loading action creator
)(Location)

export default Location;

