// @flow

import React from "react";
import DropzoneUploader from '../Components/Common/DropzoneUploader.js';
import { uploadImage, renameFile, removeFile } from '../api/Backendless.js';

import { connect } from 'react-redux'

@connect((store) => {
  return {
    editAppventureUrl: store.editAppventure
  };
})

export default class LandingPage extends React.Component {

  render() {

    return (
      <div>
        <h1>Test Page</h1>
        <DropzoneUploader />

      </div>
    );
  }

  rename() {
    renameFile()
  }

  handleFileUpload() {
    function handleSuccess (result) {
      console.log(result.fileURL)
      alert( "File successfully uploaded. Path to download: " + result.fileURL, );
   }
  
    function handleError(result) {
       alert( "error - " + result.message );
    }

    const fileElement = this.refs.fileRef;
    const file = fileElement.files[0]
    // file.name = "newObjectId"
    // console.log(file)
    uploadImage(fileElement.files, handleSuccess, handleError)
  }



}

        // <input type="file" ref="fileRef" id="files" name="files[]" multiple=""></input>
        // <input type="button" onClick={this.handleFileUpload.bind(this)} value="Upload File"></input>
        // <button onClick={this.rename.bind(this)}>Rename</button>