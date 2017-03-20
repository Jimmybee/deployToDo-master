
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import { uploadImage, renameFile } from '../../api/Backendless.js';


class DropzoneUploader extends Component {

  constructor(props) {
    super(props);

    this.state = {
      uploadedFile: null,
      uploadedFileURL: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleFileUpload(files)
  }

  render() {
  	  	const  { editAppventureUrl } = this.props
  	  	console.log(this.props)
           return (
			<form>
		        <div className="FileUpload">
		          <Dropzone
		            onDrop={this.onImageDrop.bind(this)}
		            multiple={false}
		            accept="image/*">
		            <div>Drop an image or click to select a file to upload.</div>
		          </Dropzone>
		        </div>

		        <div>
		          {this.state.uploadedFile === null ? null :
		          <div>
		            <p>{this.state.uploadedFile.name}</p>
		            <img src={this.state.uploadedFileURL} />
		          </div>}
		        </div>
		      </form>  
	);
  }

  testAnother(result) {
  	      console.log(result.fileURL)

  }

  handleFileUpload(files) {
    
    function handleSuccess (result) {
      alert( "File successfully uploaded. Path to download: " + result.fileURL, );
      this.testAnother(result)
      this.setState({
      	uploadedFileURL: result.fileURL
   	   });

   };
  
    function handleError(result) {
       alert( "error - " + result.message );
    }

    console.log(files)
    uploadImage("folder", files, handleSuccess.bind(this), handleError.bind(this))
  }
  
}


export default DropzoneUploader;
