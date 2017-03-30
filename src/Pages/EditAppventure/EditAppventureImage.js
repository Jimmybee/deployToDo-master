// @flow

import React from "react";
import DropzoneUploader from '../../Components/Common/DropzoneUploader.js';
import { editAppventureTitle } from '../../Actions/Actions.js';

import { connect } from 'react-redux'

export default class EditAppventureImage extends React.Component {

  render() {
    const appventure = this.props.appventure
    return (
      <div>
        <h1>Edit Image</h1>
        <DropzoneUploader/>
      </div>
    );
  }

}


