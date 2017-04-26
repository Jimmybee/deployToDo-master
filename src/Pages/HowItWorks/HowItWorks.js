// @flow

import './howItWorks.css';
import { howToPlay, theLocation, timed} from './textBlocks'

import React from "react";
import FadeInImage from "../../Components/Common/FadeImage"


export default class HowItWorks extends React.Component {

  render() {

    return (
      <div className="How-it-works">
      	<h1>How It Works</h1>
      	<div className="Subject">
      		<div className="Image-container">
	      		<FadeInImage className="Subject-image Slide-left" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
		     <p> {howToPlay} </p>
	    </div>
	    <div className="Subject">
	      	<p> {theLocation}</p>
	      	 <div className="Image-container">
	      		<FadeInImage className="Subject-image Slide-right" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
	    </div>
	    <div className="Subject">
      		<div className="Image-container">
	      		<FadeInImage className="Subject-image Slide-left" src={require('../../images/mapWeb.png')} style={{width: '100px', height: 'auto'}}/>
	      	</div>
		     <p> {timed} </p>
	    </div>
      </div>
    );
  }
}

