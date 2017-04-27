// @flow

import React, { Component } from 'react';
import FadeInImage  from '../../../Components/Common/FadeImage';

class AppventureCard extends Component {

  render() {

  	const  { appventure } = this.props;

  	if (appventure) {
  		var objectId = appventure.objectId
  		var title = appventure.title
      var url = appventure.imageUrl
  	} else {
      return <label> Loading... </label>
  	}

     return (  
  		<div>   
  			<FadeInImage src={url} className="img-responsive" />	
  			<h2 className="header2"> <span className="header2Span">FREE</span> </h2> 	
  			<h3 className="header3"> <span className="header3Span">See More</span></h3>
  			<div className='well'> {title} : This is an exciting place to find all your stuff and things </div>		
  		</div>        
  	);
  }

}


export default AppventureCard;

