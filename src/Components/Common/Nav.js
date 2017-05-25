// @flow

import React from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import { connect } from 'react-redux'

import ModalLogin from '../../Components/ModalLogin/ModalLogin'

@connect((store) => {
  return {
    user: store.user
  };
})

export default class Nav extends React.Component {
  state: {
    userOpen: boolean;
    collapsed: boolean;
    listNav: boolean;
  };

  constructor(props) {
    super(props)
    this.state = {
      userOpen: false,
      collapsed: true,
      listNav: false,
      showModal: false,
    };
  }

  componentDidMount(x,y,z){
    this.setState({listNav: window.innerWidth<768});
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  toggleUserDropDown() {
    const userOpen = !this.state.userOpen;
    this.setState({userOpen});
    console.log(userOpen)
  }

  renderUserDropDown() {

    const user = this.props.user;
    const { userOpen } = this.state;
    const dropdownOpenClass = userOpen ? "open" : "";

    return (
      // <li className={"dropdown " + dropdownOpenClass}>
      //   <a className="dropdown-toggle" onClick={this.toggleUserDropDown.bind(this)}>Dropdown</a>
      //   <ul className="dropdown-menu" role="menu">
      //<li><button type="button" onClick={this.toggleModal.bind(this)}>Login</button></li> 
      //     

             user === null ? 
                <li><a onClick={this.open.bind(this)}>Login</a></li>
                : 
               <li> <Link to="profile" onClick={this.toggleUserDropDown.bind(this)}>Profile</Link> </li>
              
      //   </ul>
      // </li> 
    );
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

    const user = this.props.user;
    // console.log(user);

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
             <p><Link className="nav navbar-left" to="/"><img src={require('./AppLogo.png')} alt="boohoo" /></Link></p>

          </div>

          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li> <Link to="about" onClick={this.toggleCollapse.bind(this)}>About</Link> </li>
              <li> <Link 
                to="/appDownload?filter=12&appventureId=1232132123" 
                onClick={this.toggleCollapse.bind(this)}>
                The App
                </Link> </li>
              <li> <Link to="howItWorks" onClick={this.toggleCollapse.bind(this)}>How It Works</Link> </li>
              <li> <Link to="explore" onClick={this.toggleCollapse.bind(this)}>Find Appventures</Link> </li>
              <li> <Link to="create" onClick={this.toggleCollapse.bind(this)}>Create Appventures</Link> </li>
              {this.renderUserDropDown()}
            </ul>
          </div>
        </div>
        <ModalLogin openState={this.state.showModal} onHide={this.close.bind(this)} />
      </nav>
    );
  }



  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

}
//            <p><Link className="btn btn-primary btn-lg" to="/editAppventure/summary">Start Here</Link></p>
//                         <a href="#" className="nav navbar-left"><img src={require('./AppLogo.png')} alt="boohoo"/></a>
//            <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}> Test Left </IndexLink><
//            <li> <Link to="testPage" onClick={this.toggleCollapse.bind(this)}>Test Page</Link> </li>


 // <li class="dropdown">
 //          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
 //          <ul class="dropdown-menu" role="menu">
 //            <li><a href="#">Action</a></li>
 //            <li><a href="#">Another action</a></li>
 //            <li><a href="#">Something else here</a></li>
 //            <li class="divider"></li>
 //            <li><a href="#">Separated link</a></li>
 //            <li class="divider"></li>
 //            <li><a href="#">One more separated link</a></li>
 //          </ul>
 //        </li>