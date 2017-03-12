// @flow

import React, { Component } from 'react';


class AppventureCard extends Component {

  render() {
  var outline = {
  	outlineStyle: 'solid',
  	outlineWidth: 1,
  	outlineColor: 'green'
  }

     return (  
		<div style={outline}>   
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
