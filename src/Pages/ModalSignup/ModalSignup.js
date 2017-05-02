// @flow

// import './Modal.css';

import React from "react";


export default class Modal extends React.Component {

  render() {
    return (
     <div class="modal">
  		<div class="modal-dialog">
   			 <div class="modal-content">
   			 	<div class="modal-header">
   			 		<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    			</div>
    			 <div class="modal-body">
      				 <p>One fine body…</p>
    			 </div>
  	  		<div>
  	  	</div>
  	</div>
    );
  }
}

