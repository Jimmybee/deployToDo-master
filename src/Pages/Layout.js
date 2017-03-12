// @flow

import React from "react";
// import { Link } from "react-router";
import '../App.css';

// import Footer from "../components/layout/Footer";
import Nav from "../Components/Common/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px",
      outlineStyle: 'solid',
      outlineColor: 'yellow',
      outlineWidth: 1
    };
    console.log("layout");
    console.log(location);

    return (
      <div>
        <div className='col-lg-1'>
        </div>
        <div className='col-lg-11'>
          <Nav location={location} />
        </div>
        <div className="container" style={containerStyle}>
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
