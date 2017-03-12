// @flow

import React, { Component } from 'react';
import AppventureCard from './AppventureCard';


class AppventureDoubleCard extends Component {

  render() {

  var greenOutline = {
  	outlineStyle: 'solid',
  	outlineWidth: 1,
  	outlineColor: 'green'
  }
  
           return ( 
           	<div>
           		<div className='col-xs-1'> </div>
           		<div className='col-sm-4 maxWidth' style={greenOutline}>
          			<AppventureCard/>
          		</div>
          		<div className='col-sm-4 maxWidth' style={greenOutline}>
          			<AppventureCard/>
          		</div>
          	</div>
	);
  }
}


export default AppventureDoubleCard;