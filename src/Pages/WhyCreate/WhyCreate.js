// @flow

import './whyCreate.css';
import { localQuizzes, personalised, events} from './textBlocks'

import React from "react";
import FadeInImage from "../../Components/Common/FadeImage"


export default class HowItWorks extends React.Component {

  render() {

    return (
      <div className="How-it-works">
      	<h1>Create Your Own Appventures</h1>
      	<div className="Subject">
      		<div className="Image-container">
	      		<FadeInImage className="Subject-image Slide-left" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
		     <p> {localQuizzes} </p>
	    </div>
	    <div className="Subject">
	      	<p> {personalised}</p>
	      	 <div className="Image-container">
	      		<FadeInImage className="Subject-image Slide-right" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
	    </div>
	    <div className="Subject">
      		<div className="Image-container">
	      		<FadeInImage className="Subject-image Slide-left" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
		     <p> {events} </p>
	    </div>
      </div>
    );
  }
}

