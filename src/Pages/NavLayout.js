// @flow
// If navState = edittingAppventure, then show different nav bar


import React from "react";
// import { Link } from "react-router";
import '../App.css';

// import Footer from "../components/layout/Footer";
import Nav from "../Components/Common/Nav";
// import { connect } from 'react-redux';

// @connect((store) => {
//   return {
//     location: store.location
//   };
// })



export default class NavLayout extends React.Component {
  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll.bind(this));
    this.setState( {
      fixed: false
    });
  } 

  render() {
    const containerStyle = {
      marginTop: "60px",
    };

    console.log("layout:", this.props.location)

    // const { location }  = this.props.storeLocation
    // console.log("store", location)

    return (
      <div>
        <Nav/>
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

  handleScroll(e) {
    let scrollTop = event.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);
    let fixed = (scrollTop > 80) ? true : false
    this.setState( {
      fixed: fixed
    });
  }

  
}
