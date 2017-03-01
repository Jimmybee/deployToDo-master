import React from "react";
import { IndexLink, Link } from "react-router";
import '../../App.css';


export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/explore/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/login/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <IndexLink to="/?filter=12&appventureId=1232132123" onClick={this.toggleCollapse.bind(this)}>Download</IndexLink>
              </li>
              <li activeClassName="active">
                <Link to="explore" onClick={this.toggleCollapse.bind(this)}>Explore</Link>
              </li>
              <li activeClassName="active">
                <Link to="login" onClick={this.toggleCollapse.bind(this)}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
