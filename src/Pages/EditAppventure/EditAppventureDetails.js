// @flow

import React from "react";
import TextBox from '../../Components/Common/TextBox.js';
import { editAppventureTitle } from '../../Actions/Actions.js';


export default class EditAppventureDetails extends React.Component {

  render() {
    const appventure = this.props.appventure
    return (
      <div>
        <h1>Edit Details</h1>
        <TextBox dispatchValue={this.editTitle} placeholder="Title" value={appventure.title.value}/>
        <div><h3>{appventure.title.value}</h3></div>
        <TextBox dispatchValue={this.editTitle} placeholder="Location name"/>
      </div>
    );
  }

  editTitle(title) {
    console.log("edit title")
    editAppventureTitle(title)
  }

}


