// @flow

import './appventureSummary.css'

import React, { Component } from 'react';
import FadeInImage  from '../../Components/Common/FadeImage';

// Image
// Title
// Themes
// Descriptions
// Duration
// Time restrictions
// Number of Steps
// Starting Location & Map

export default class AppventureSummary extends React.Component {

  render() {
    const appventure = this.props.appventure

    return (
      <div className="appventure-summary">
        <h1>{appventure.title}</h1>
        <FadeInImage className="image" src={appventure.imageUrl}/>
        <label> Main Theme: {appventure.themeOne}</label> 
        <label> Estimated duration: {appventure.duration} </label>
        <label> Suggested times restricted to {appventure.startTime} - {appventure.endTime} </label>
        <label> Starting location at {appventure.startingLocationName} </label>
        <p>{appventure.description}</p>
      </div>
    );
  }

}
