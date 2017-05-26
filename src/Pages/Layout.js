// @flow
// If navState = edittingAppventure, then show different nav bar


import React from "react";
// import { Link } from "react-router";
import '../App.css';



export default class Layout extends React.Component {
  render() {

    console.log("layout:", this.props.location)

    // const { location }  = this.props.storeLocation
    // console.log("store", location)

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
               {this.props.children}

            </div>
          </div>
        </div>
      </div>

    );
  }
}