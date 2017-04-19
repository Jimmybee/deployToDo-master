
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import { uploadFile } from '../../api/Backendless.js';

class AudioUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
    };
  }

  onDrop(files) {

    this.setState({
      uploadedFile: files[0]
    });

    this.handleFileUpload(files)
  }


  render() {
      const { input } = this.props;

      return (
		        <div className="FileUpload">
		          <Dropzone
		            onDrop={this.onDrop.bind(this)}
		            multiple={false}
		            accept="audio/*">
                  {
                    input.value === null ?  
                    <div>Select an audio file to upload.</div>
                  :
                    <div>
                       <label>Sound Data Uploaded: {input.value} </label>
                    </div>
                  }
		          </Dropzone>
		        </div> 
    	);
  }


 handleFileUpload(files) {

   const { handleUpload, objectId } = this.props; //handle field change
    
   function saveComplete (result) {
      handleUpload(result.fileURL, "soundUrl")
   };

    uploadFile(objectId, files, saveComplete.bind(this))
  }  
}


export default AudioUploader;
