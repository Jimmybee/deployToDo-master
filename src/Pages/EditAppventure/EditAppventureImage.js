// @flow

import React from "react";
import DropzoneUploader from '../../Components/Common/DropzoneUploader.js';
import { editAppventureTitle } from '../../Actions/Actions.js';

export default class EditAppventureImage extends React.Component {
	constructor(props) {
	    super(props);

	  }

  render() {
    const { appventure } = this.props;

    return (
      <div>
        <h1>Edit Image</h1>
        <DropzoneUploader imgSrc={appventure.imageUrl || null} appventure={appventure} />
      </div>
    );
  }

}


