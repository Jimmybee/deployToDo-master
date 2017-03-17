// @flow

import React, { Component } from 'react';
import { Link } from "react-router";
import './AppventureSearch.css';


class AppventureSearch extends Component {

  render() {

  	var margins = {
    	marginTop: 20,
    	marginBottom: 20,
    };

    var padding = {
    	paddingTop: 10,
    	paddingBottom: 10,
    };

    var box1 = {
    	borderStyle: 'solid',
    	borderWidth: 1,
    	borderColor: '#979797',
  	    width: '30%',
    };

    var box2 = {
    	borderStyle: 'solid',
    	borderWidth: 1,
    	borderColor: '#979797',
  	    width: '70%',
    };

     return (     
		<div className='row' style={margins}>
			<div className="searchTable">
			  <div className="searchRow">
			    <div className="searchCol" style={box1}>
			      <div className="form-group">
 					 <label className="control-label" for="inputSmall">Where</label>
 					 <input className="form-control input-sm" type="text" id="inputSmall" placeholder="London, United Kingdom"/>
				</div>
			  </div>
			  <div className="searchCol" style={box2}>
			  	<div className="searchCol" style={box2}> 
			    	<div className="form-group">
 						 <label className="control-label" for="inputSmall">For</label>
 						 <input className="form-control input-sm" type="text" id="inputSmall" placeholder="Family, Fun"/>
					</div>
			  	</div>
			  	<div className="searchCol verticalAlign" style={box1}>
				 	 <div className="searchCol verticalAlign">
				   		 <Link to="/explore?filter=1" className="btn btn-default" style={padding}>Default</Link>
 					</div>
 				</div>
 			</div>
		</div>
	</div>
	</div>
	);
  }
}


export default AppventureSearch;

			// <div className='col-sm-5' style={border}>
			// 		<h4>Where</h4>
  			 // 	<input type="text" placeholder="London, United Kingdom" ref="createInput"/>
			// </div>

		// 	<div className="d-flex align-content-center flex-wrap">
		//  	<div className='col-sm-5' style={border}>
		// 		<div className="form-group">
 	// 				 <label className="control-label" for="inputSmall">Where</label>
 	// 				 <input className="form-control input-sm" type="text" id="inputSmall" placeholder="London, United Kingdom"/>
		// 		</div>
		// 	</div>
		// 	<div className='col-sm-7' style={border}>
		// 		<div className='col-sm-9'>
		// 			<div className="form-group">
 	// 					 <label className="control-label" for="inputSmall">For</label>
 	// 					 <input className="form-control input-sm" type="text" id="inputSmall" placeholder="Family, Fun"/>
		// 			</div>
		// 		</div>
		// 		<div className='col-sm-3' style={alignVertical}>
		// 			<Link to="/explore?filter=1" className="btn btn-default" style={padding}>Default</Link>
		// 		</div>
		// 	</div>
		// </div>