// @flow
import './components.css'

import React from "react";
import ImageUploader from '../../Components/Common/ImageUploader.js';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditAppventure'

import { editAppventureTitle } from '../../Actions/Actions.js';

export default class AppventureImage extends React.Component {
	constructor(props) {
	    super(props);
	}

  dropzoneComponent() {
    return ({ input, meta: { touched, error } }) => (
          <ImageUploader uploadType="image/*" fieldName="imageUrl" objectId={this.props.appventure.objectId} input={input} handleUpload={this.handleChange.bind(this)}/>
       )
  }

  render() {
    const { appventure, handleSubmit } = this.props;

    return (
      <div className="fluid-container">
      <div className="row"> 
        <h1>Add a main photo that looks great to make your appventure stand out.</h1>
        <form className="col-xs-10" onSubmit={handleSubmit}>
          <Field name="imageUrl" component={this.dropzoneComponent()} className="form-control"/>   
          <button className="Save-Continue" type="submit">Save & Continue</button>  
        </form>
      </div>
      </div>
    );
  }

  handleChange(value, fieldName) {
    const change = this.props.change;
    change(fieldName, value)
  }

}

// Decorate the form component
AppventureImage = reduxForm({
  form: 'appventureImage' // a unique name for this form
})(AppventureImage);

// You have to connect() to any reducers that you wish to connect to yourself
AppventureImage = connect(
  state => ({
    initialValues: state.editAppventure
  }),
  { load: load }               // bind account loading action creator
)(AppventureImage)


