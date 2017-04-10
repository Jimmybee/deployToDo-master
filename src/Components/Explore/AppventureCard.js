// @flow
import React, { Component } from 'react';
import { imageUrl } from '../../api/Config';

class AppventureCard extends Component {

  render() {

  	const  { appventure } = this.props
  	if (appventure) {
  		var objectId = appventure.objectId
  		var title = appventure.title
      var url = imageUrl(objectId)
  	} else {
      return <label> Loading... </label>
  	}

     return (  
		<div>   
			<img src={url} alt="boohoo" className="img-responsive" />	
			<h2 className="header2"> <span className="header2Span">FREE</span> </h2> 	
			<h3 className="header3"> <span className="header3Span">See More</span></h3>
			<div className='well'> {title} : This is an exciting place to find all your stuff and things </div>		
		</div>        
	);
  }
}


export default AppventureCard;

        	 // <h2> <span>London Appventure</span> </h2> 
        	 // <img src={require('./LondonForWeb.png')} alt="boohoo" className="img-responsive" />
