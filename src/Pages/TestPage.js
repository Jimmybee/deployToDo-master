// @flow

import React from "react";
// import GoogleMap from '../Components/Common/GoogleMap.js';
// import PlacesMap from './PlacesMaps.js';
import AutoCompleteMap from '../Components/Common/AutoCompleteMap.js';


import DropzoneUploader from '../Components/Common/DropzoneUploader.js';
import { uploadImage, renameFile, removeFile } from '../api/Backendless.js';
import TextBox from '../Components/Common/TextBox.js';

import { editAppventureTitle } from '../Actions/Actions.js';

import { connect } from 'react-redux'

@connect((store) => {
  return {
    editAppventure: store.editAppventure
  };
})

@connect((store) => {
  return {
    editAppventureUrl: store.editAppventure
  };
})

export default class LandingPage extends React.Component {

  render() {
    const appventure = this.props.editAppventure
    return (
      <div>
        <h1>Test Page</h1>
        <div><h3>{appventure.title}</h3></div>
        <Example/>
        <AppventureRow/>
      </div>
    );
  }

  editTitle(title) {
    console.log("edit title")
    editAppventureTitle(title)
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

class Example extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      open: true,
      subOpen: false
    };
  }

  render() {
    return (
      <div>
        <button onClick={ ()=> this.setState({ open: !this.state.open })}>
          click 
        </button>
        <div className="panel panel-default">
        <Panel collapsible expanded={this.state.open}>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
          Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
           <button onClick={ ()=> this.setState({ subOpen: !this.state.subOpen })}> Sub </button>
           <Panel collapsible expanded={this.state.subOpen}>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
           Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
          </Panel>
        </Panel>
        </div>
      </div> 
    );
  }
}


class Panel extends React.Component {
   constructor(props, context) {
    super(props, context);

    this.state = {
      expanded: this.props.defaultExpanded,
    };
  }

  render() {
    const {
      expanded, 
      children } = this.props;

    console.log(children)  
    console.log(expanded)
    return(
      <div className="panel-body">
        {expanded === true ? <label> {children} </label> : null}
      </div>
    );
  }
}



import '../Components/Create/appventureRow.css'

class AppventureRow extends React.Component {
  
  renderValidation() {
    return (
      <h3> This appventure requires more to be complete for wrap</h3>
      );
  }

  render() {
    

    return (  
      <div className= "appventureRow"> 
        <div style={{padding : "10px", margin: "20px"}}>  
          <img src={require('../images/LondonForWeb.png')} alt="facebook login"  className="appventureRowImage pull-left"/>
            <button className="btn btn-default pull-right editBtn" onClick={this.edit.bind(this)}> Edit </button>
            <h1 className="appventureRowTitle"> This is a title </h1>
            {this.renderValidation()}
        </div>
      </div>        
    );
  }

  edit() {
    const  { appventure, edit } = this.props

    edit(appventure)
  }

}


