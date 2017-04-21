
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import { uploadFile, updateBackendlessAppventureDetails } from '../../api/Backendless.js';

// Pass in appventure
// Check url for image
// Or show default image

class DropzoneUploader extends Component {
   componentDidMount() {

    }

     componentDidUpdate() {

    }

  constructor(props) {
    super(props);

    const { imgSrc, appventure } = this.props

    this.state = {
      noImage: false,
      uploadedFile: null,
      uploadedFileURL: imgSrc,
      compressedUrl: null,

    };
  }

  onImageDrop(files) {
    const file = files[0]  

    this.setState({
      uploadedFile: file,
      uploadedFileURL: file.preview
    });

    var img = new Image();

    const updateCanvas = this.updateCanvas;
    const canvas = this.refs.canvas;

    img.onload = function(){
      var height = img.naturalHeight;
      var width = img.naturalWidth;
      updateCanvas(canvas, img);
    }

    img.src = file.preview;

    // this.handleFileUpload(files)
  }

   updateCanvas(canvas, img) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
                   0, 0, canvas.width, canvas.height); // destination rectangle
        var image = new Image();
        image.src = canvas.toDataURL("image/png", 70/100);
        const src = image.src.replace('data:' + "image/png" + ';base64,', '');
        const decoded = atob(src)
        const objectURL = window.URL.createObjectURL(image);
        console.log(objectURL)
        this.setState = {
          compressedUrl: objectURL,
        }
    }


  render() {

      return (
			<form>
		        <div className="FileUpload">
              <canvas ref="canvas" width={800} height={600} style={{display: 'none'}}/>
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
                       <img onError={this.noImage.bind(this)} src={this.state.compressedUrl} alt="uploaded" style={{width: '200px', height: 'auto'}}/>
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
