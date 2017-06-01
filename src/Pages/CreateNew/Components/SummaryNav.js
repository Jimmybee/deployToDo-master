// @flow

import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

@connect((store) => {
  return {
    user: store.user
  };
})

export default class SummaryNav extends React.Component {

  toggleCollapse() {
    // const collapsed = !this.state.collapsed;
    // this.setState({collapsed});
  }


  render() {

    return (
      <nav className="navbar navbar-fixed-top navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-left">
            <button type="button" className="" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
            <ul className="nav navbar-nav navbar-right">
              <li> <Link to="/create" onClick={this.toggleCollapse.bind(this)}> Exit </Link> </li>
            </ul>
        </div>
      </nav>
    );
  }


}
