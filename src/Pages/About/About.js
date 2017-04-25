// @flow

import './about.css';

import React from "react";
import FadeInImage from "../../Components/Common/FadeImage"

export default class LandingPage extends React.Component {
  render() {
    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter, appventureId } = query;

    // console.log("params")
    // console.log(params)
    // console.log(appventureId)

    return (
      <div className="about">
      	<h1>The Plan</h1>
      	<div className="subject">
      		<div className="imageContainer">
	      		<FadeInImage className="image" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
	      	<p> 
	      	Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	      	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
	      	when an unknown printer took a galley of type and scrambled it to make a type specimen book.
	      	 It has survived not only five centuries, but also the leap into electronic typesetting, 
	      	 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
	      	 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
	      	 Aldus PageMaker including versions of Lorem Ipsum.
	      	</p>
	    </div>
	    <div className="subject">
	      	<p> 
	      	Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
	      	Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
	      	when an unknown printer took a galley of type and scrambled it to make a type specimen book.
	      	 It has survived not only five centuries, but also the leap into electronic typesetting, 
	      	 remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
	      	 sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
	      	 Aldus PageMaker including versions of Lorem Ipsum.
	      	</p>
	      	 <div className="imageContainer">
	      		<FadeInImage className="image" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
	    </div>
      </div>
    );
  }
}

