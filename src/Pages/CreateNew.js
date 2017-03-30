// @flow

import React from "react";
import { Link } from 'react-router-dom'

export default class CreateNew extends React.Component {
  render() {

    return (
      <div className="jumbotron">
        <h1> Create New </h1>
        <p> Design a new appventure in your city right here and share it with others.</p>
        <p><Link className="btn btn-primary btn-lg" to="/editAppventure/summary">Start Here</Link></p>
      </div>
    );
  }
}
