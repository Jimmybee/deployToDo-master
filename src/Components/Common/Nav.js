// @flow

import React from "react";
import { IndexLink, Link } from "react-router";
import '../../App.css';


export default class Nav extends React.Component {
  state: {
    collapsed: boolean;
    listNav: boolean;
  };

  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
      listNav: false,
    };
  }

  componentDidMount(x,y,z){
    this.setState({listNav: window.innerWidth<768});
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    // const { location } = this.props;
    const { listNav, collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/explore/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/login/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    const logo = <a href="#" className="navbar-left"><img src={require('./AppLogo.png')} alt="boohoo"/></a>;
    var collapsedLogo = listNav ? logo : "";
    var expandedLogo = listNav ? "" : logo;

    return (
      <nav className="navbar navbar-fixed-top navbar-default" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a href="#" className="nav navbar-left"><img src={require('./AppLogo.png')} alt="boohoo"/></a>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li> <IndexLink 
                to="/?filter=12&appventureId=1232132123" 
                onClick={this.toggleCollapse.bind(this)}>
                Download
                </IndexLink> </li>
              <li> <Link to="explore" onClick={this.toggleCollapse.bind(this)}>Explore</Link> </li>
              <li> <Link to="login" onClick={this.toggleCollapse.bind(this)}>Login</Link> </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

//            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}> Test Left </IndexLink><
