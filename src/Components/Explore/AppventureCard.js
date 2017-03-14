// @flow

import React, { Component } from 'react';


class AppventureCard extends Component {

  render() {

     return (  
		<div>   
			<img src={require('./LondonForWeb.png')} alt="boohoo" className="img-responsive" />	
			<h2> <span>FREE</span> </h2> 	
			<h3> <span>See More</span></h3>
			<p> This is an exciting place to find all your stuff and things </p>		
		</div>        
	);
  }
}


export default AppventureCard;

        	 // <h2> <span>London Appventure</span> </h2> 
        	 // <img src={require('./LondonForWeb.png')} alt="boohoo" className="img-responsive" />
