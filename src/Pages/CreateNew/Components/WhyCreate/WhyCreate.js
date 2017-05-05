// @flow

import './whyCreate.css';
import { localQuizzes, personalised, events} from './textBlocks'

import React from "react";
import FadeInImage from "../../../../Components/Common/FadeImage"


export default class WhyCreate extends React.Component {

  render() {

    return (
      <div className="Why-create">
      	<div className="col-sm-4">
      		<div className="Image-container">
	      		<FadeInImage className="Subject-image" src={require('../../../../images/familyAroundPhone.jpg')}/>
	      	</div>
		     <p> {localQuizzes} </p>
	    </div>
      	<div className="col-sm-4">
	      	 <div className="Image-container">
	      		<FadeInImage className="Subject-image" src={require('../../../../images/peopleStanding.jpeg')}/>
	      	</div>
	      	<p> {personalised}</p>
	    </div>
      	<div className="col-sm-4">
      		<div className="Image-container">
	      		<FadeInImage className="Subject-image" src={require('../../../../images/mapPlanning.jpeg')}/>
	      	</div>
		     <p> {events} </p>
	    </div>
      </div>
    );
  }
}

