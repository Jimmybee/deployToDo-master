import React, { Component } from 'react';
import { Field, reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux'
import { load } from '../../reducers/EditStep'
import store from '../../store/store';

import Switch from '../../Components/Common/Switch.js';
import DropzoneUploader from '../../Components/Common/DropzoneUploader.js';
import AudioUploader from '../../Components/Common/AudioUploader.js';
import ImageUploader from '../../Components/Common/ImageUploader.js';

export default class StepClues extends Component {
  constructor(props) {
    super(props);
  }

  renderTextField(){
    if (this.props.textClue === true) {
      console.log(this.props)
      return (<Field name="initialText" component="textarea" className="form-control"/>);
    } else {
      return null;
    }
  }

  dropzoneComponent() {
    return ({ input, meta: { touched, error } }) => (
          <ImageUploader uploadType="image/*" fieldName="imageUrl" objectId={this.props.objectId} input={input} handleUpload={this.handleChange.bind(this)}/>
       )
  }

  renderImageField(){
    if (this.props.pictureClue === true) {
      return (<Field name="imageUrl" component={this.dropzoneComponent()} className="form-control"/>);
    } else {
      return null;
    }
  }

  audioUploader() {
    return ({ input, meta: { touched, error } }) => (
          <AudioUploader uploadType="audio/*" fieldName="soundUrl" objectId={this.props.objectId} input={input} handleUpload={this.handleChange.bind(this)}/>
       )
  }

  renderSoundField(){
    if (this.props.soundClue === true) {
      return (<Field name="soundUrl" component={this.audioUploader()} className="form-control"/>);
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
         <Field name="setup[textClue]" component={switchComponent("setup[textClue]", "Text Clue:", this.handleChange.bind(this))} className="form-control"/>
         <Field name="setup[pictureClue]" component={switchComponent("setup[pictureClue]", "Image Clue:", this.handleChange.bind(this))} className="form-control"/>
         <Field name="setup[soundClue]" component={switchComponent("setup[soundClue]", "Sound Clue:", this.handleChange.bind(this))} className="form-control"/>
         {this.renderTextField()}
         {this.renderImageField()}
         {this.renderSoundField()}

      </div>
    );
  }

  handleChange(value, fieldName) {
    const change = this.props.change;
    change(fieldName, value)
  }

}

// Decorate the form component
StepClues = reduxForm({
  form: 'stepClues' // a unique name for this form
})(StepClues);

// You have to connect() to any reducers that you wish to connect to yourself
StepClues = connect(
  state => ({
    initialValues: state.editStep
  }),
  { load: load }               // bind account loading action creator
)(StepClues)

// Decorate with connect to read form values
const selector = formValueSelector('stepClues') // <-- same as form name
StepClues = connect(
  state => {
    // can select values individually
    const objectId = selector(state, 'objectId');
    const textClue = selector(state, 'setup[textClue]');
    const pictureClue = selector(state, 'setup[pictureClue]');
    const soundClue = selector(state, 'setup[soundClue]');

    // const favoriteColorValue = selector(state, 'favoriteColor')
    // or together as a group
    // const { textClue, pictureClue, soundClue } = selector(state, 'setup[textClue]', 'setup[pictureClue]', 'setup[soundClue]')
    return {
      objectId,
      textClue, 
      pictureClue,
      soundClue,
      // favoriteColorValue,
      // fullName: `${firstName || ''} ${lastName || ''}`
    }
  }
)(StepClues)
