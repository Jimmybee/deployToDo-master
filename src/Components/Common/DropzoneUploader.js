
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import { uploadFile, updateBackendlessAppventureDetails } from '../../api/Backendless.js';

// Pass in appventure
// Check url for image
// Or show default image

class DropzoneUploader extends Component {

  constructor(props) {
    super(props);

    const { imgSrc, appventure } = this.props

    this.state = {
      noImage: false,
      uploadedFile: null,
      uploadedFileURL: imgSrc,
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleFileUpload(files)
  }


  render() {

      return (
			<form>
		        <div className="FileUpload">
		          <Dropzone
		            onDrop={this.onImageDrop.bind(this)}
		            multiple={false}
		            accept="image/*">
                  {
                    this.state.noImage === true ?  
                    <div>Drop an image or click to select a file to upload.</div>
                  :
                    <div>
                       <img onError={this.noImage.bind(this)} src={this.state.uploadedFileURL} alt="uploaded" style={{width: '200px', height: 'auto'}}/>
                    </div>
                  }
		          </Dropzone>
		        </div>

		        
		      </form>  
	);
  }

  noImage() {
    this.setState({noImage: true});
  }

  testAnother(result) {
  	 console.log(result.fileURL)
  }

  // handleFileUpload(files) {
    
  //  function handleSuccess (result) {
  //     alert( "File successfully uploaded. Path to download: " + result.fileURL, );
      

  //     renameFile(result)
  //     this.setState({
  //       noImage: false,
  //       uploadedFileURL: result.fileURL
  //      });
  //  };
  
  //   function handleError(result) {
  //      alert( "error - " + result.message );
  //   }

  //   console.log(files)
  //   uploadImage("folder", files, handleSuccess.bind(this), handleError.bind(this))
  // }


  handleFileUpload(files) {

   function updateAppventure() {
      alert( "File successfully uploaded");
   }
    
   function saveComplete (result) {
      this.setState({
        noImage: false,
        uploadedFileURL: result.fileURL
       });
      const newAppventure = {imageUrl: result.fileURL}
      updateBackendlessAppventureDetails(this.props.appventure, newAppventure, updateAppventure)
   };

    uploadFile("folder", files, saveComplete.bind(this))
  }
  
}


export default DropzoneUploader;
