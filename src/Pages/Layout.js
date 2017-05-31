// @flow
// If navState = edittingAppventure, then show different nav bar


import React from "react";
// import { Link } from "react-router";
import '../App.css';
import Nav from "../Components/Common/Nav";



export default class Layout extends React.Component {
  render() {

    console.log("layout:", this.props.location)

    // const { location }  = this.props.storeLocation
    // console.log("store", location)
    const containerStyle = {
      marginTop: "60px",
    };

    return (
      <div>
        <Nav/>
        <div className="container-fluid" style={containerStyle}>
          <div className="row">
               {this.props.children}
          </div>
        </div>
      </div>

    );
  }
}
