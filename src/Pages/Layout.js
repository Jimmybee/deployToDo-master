import React from "react";
import { Link } from "react-router";
import '../App.css';

// import Footer from "../components/layout/Footer";
import Nav from "../Components/Common/Nav";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>

        <Nav location={location} />

        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-12">
                  <button className="bttn btn-success">This is a button</button>


              {this.props.children}

            </div>
          </div>
        </div>
      </div>

    );
  }
}
