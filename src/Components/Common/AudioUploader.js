
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import { uploadFile } from '../../api/Backendless.js';

class Uploader extends Component {
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
      const { input, uploadType } = this.props;

      return (
		        <div className="FileUpload">
		          <Dropzone
		            onDrop={this.onDrop.bind(this)}
		            multiple={false}
		            accept={uploadType}>
                  {
                    input.value === "" ?  
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

   const { handleUpload, objectId, fieldName } = this.props; //handle field change
    
   function saveComplete (result) {
      handleUpload(result.fileURL, fieldName)
   };

    uploadFile(objectId, files, saveComplete.bind(this))
  }  
}


export default Uploader;
