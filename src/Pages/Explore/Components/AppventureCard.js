// @flow

import React, { Component } from 'react';
import FadeInImage  from '../../../Components/Common/FadeImage';

class AppventureCard extends Component {

  render() {

  	const  { appventure } = this.props;

  	if (appventure) {

  	} else {
      return <label> Loading... </label>
  	}

     return (  
  		<div className="Appventure-card">           
        <div className="Image-container">
  			 <FadeInImage src={appventure.imageUrl} className="image"/>	
        </div>
        <div className="Text-container">
          <h2> {appventure.title} </h2>    
          <h3> {"@ " + appventure.startingLocationName} </h3>  
           <p> {appventure.description} </p>    
        </div>
  		</div>        
  	);
  }

}


export default AppventureCard;

