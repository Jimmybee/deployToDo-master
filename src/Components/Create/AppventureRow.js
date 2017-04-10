// @flow
import React, { Component } from 'react';

import './appventureRow.css'

class AppventureCard extends Component {
  
  renderValidation() {
    return (
      <h3> This appventure requires more to be complete</h3>
      );
  }

  render() {
    const  { appventure, config } = this.props
    
    var objectId = appventure.objectId || null
    var title = appventure.title || null

    return (  
  		<div className= "appventureRow"> 
        <div style={{padding : "10px"}}>  
          <button className="btn btn-default pull-right" onClick={this.edit.bind(this)}> Edit </button>
          <h1>{title}</h1>
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


export default AppventureCard;