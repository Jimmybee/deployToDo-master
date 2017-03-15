// @flow

import React, { Component } from 'react';


class AppventureSearch extends Component {

  render() {

    var border = {
    	borderStyle: 'solid',
    	borderWidth: 1,
    	borderColor: '#979797'
    };
           return (             
		<div className='row'>
			<div className='col-sm-5' style={border}>
				<h4>Where</h4>
       			<input type="text" placeholder="London, United Kingdom" ref="createInput"/>
			</div>
			<div className='col-sm-5' style={border}>
				<h4>For</h4>
       			<input type="text" placeholder="Easy, Family, Fun" ref="createInput"/>
			</div>
			<div className='col-sm-2'>
			</div>
		</div>
	);
  }
}


export default AppventureSearch;