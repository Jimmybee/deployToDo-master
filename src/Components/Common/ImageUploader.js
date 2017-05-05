
import Dropzone from 'react-dropzone';
import React, { Component } from 'react';
import { uploadFile } from '../../api/Backendless.js';

import FadeInImage from './FadeImage.js';

class Uploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null,
    };

  }


  onDrop(files) {
    const file = files[0]  

    // this.setState({
    //   uploadedFileURL: file
    // });

    var img = new Image();

    const updateCanvas = this.updateCanvas;
    const canvas = this.refs.canvas;
    const uploadImage = this.uploadImage.bind(this)


    img.onload = function(){
      var height = img.naturalHeight;
      var width = img.naturalWidth;
      updateCanvas(canvas, img);
      uploadImage()
    }

    img.src = file.preview;
  }

  uploadImage() {
    const canvas = this.refs.canvas;
    var image = new Image();
    image.src = canvas.toDataURL("image/jpeg", 70/100);
    const blob = this.dataURItoBlob(image.src)
    var form = new FormData()
    var timestamp = new Date().getUTCMilliseconds().toString();
    form.append("image", blob, timestamp + ".jpeg");

    this.handleFileUpload(form.get("image"))
  }

  render() {
      var { input, uploadType } = this.props;

      return (
		        <div className="FileUpload">
              <canvas ref="canvas" width={800} height={600} style={{display: 'none'}}/>
		          <Dropzone
		            onDrop={this.onDrop.bind(this)}
		            multiple={false}
		            accept={uploadType}>
                  {
                    input.value === "" ?  
                    <div>Select an image file to upload.</div>
                  :
                    <div>
                       <FadeInImage src={input.value} alt="uploaded" style={{width: '200px', height: 'auto'}}/>
                    </div>
                  }
		          </Dropzone>
		        </div> 
    	);
  }

  //Image is uploaded to backendless 
 handleFileUpload(files) {

   const { handleUpload, objectId, fieldName } = this.props; //handle field change
    
   function saveComplete (result) {
      handleUpload(result.fileURL, fieldName)
     
   };

    uploadFile(objectId, files, saveComplete.bind(this))
  }  

  dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for(var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

  updateCanvas(canvas, img) {
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, img.width, img.height,     // source rectangle
                   0, 0, canvas.width, canvas.height); // destination rectangle
    }

}


export default Uploader;
