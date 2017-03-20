// @flow
import React, { Component } from 'react';
import { backendless as config } from '../../api/Config';

class AppventureCard extends Component {

  render() {

  	const  { appventure } = this.props
  	if (appventure) {
  		var objectId = appventure.objectId
  		var title = appventure.title
  		console.log('title is', title)
  		var url = "https://api.backendless.com/" + config.APPLICATION_ID + "/" + config.VERSION + "/files/myfiles/" + objectId + "/image.jpg"
  		console.log('url is', url)
  	} else {

  	}

     return (  
		<div>   
			<img src={url} alt="boohoo" className="img-responsive" />	
			<h2> <span>FREE</span> </h2> 	
			<h3> <span>See More</span></h3>
			<div className='well'> {title} : This is an exciting place to find all your stuff and things </div>		
		</div>        
	);
  }
}


export default AppventureCard;

        	 // <h2> <span>London Appventure</span> </h2> 
        	 // <img src={require('./LondonForWeb.png')} alt="boohoo" className="img-responsive" />
