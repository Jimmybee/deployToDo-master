// @flow

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';

var componentConfig = {
    iconFiletypes: ['.jpg', '.png', '.gif'],
    showFiletypeIcon: true,
    postUrl: 'https://api.backendless.com/975C9B70-4090-2D14-FFB1-BA95CB96F300/v1/files/myfiles/test/image.jpg'
};

var eventHandlers = {

};

var djsConfig = {
	addRemoveLinks: true,
}


class ImageUploader extends Component {

  render() {
           return (
        	  <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
    );
  }
}


export default ImageUploader;