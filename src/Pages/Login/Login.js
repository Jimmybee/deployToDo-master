// @flow

import "./login.css"

import React from "react";
import { asyncRegisterUser, classicLogin, facebookLogin } from '../../api/Backendless.js'; 
// import { updateLocationPath } from '../Actions/Actions.js';
import { updateUser } from '../../Actions/Actions';

export default class LandingPage extends React.Component {
  constructor(props) {
      super(props);
      this.successfullLogin = this.successfullLogin.bind(this);
  }

  render() {

    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={ this.onSubmit.bind(this) }>
            <button type="button">Sign Up</button>
          <input type="email" placeholder="email" ref="email" required className="form-control"/>
          <input type="password" placeholder="password" ref="password" required className="form-control"/>
          <button onClick={this.loginUser.bind(this)}>Login</button>
          <button onClick={this.registerNewUser.bind(this)}>Register</button>
          <h3 className="Rule"><span>or</span></h3>
          <div className="FacebookLoginBtn">
            <button onClick={this.facebookLogin.bind(this)}>
              <img src={require('../../images/fbLogin.png')} alt="facebook login"  className="pull-right FacebookLoginBtn"/>
            </button>

          </div>
        </form>
        <button type="button" className="Button-key pull-right">Login</button>
      </div>
    );
  }

  onSubmit(e) {
    e.preventDefault();
  }

  successfullLogin( user ) {
    updateUser(user)
    this.props.history.push("/create")
  }

  facebookLogin() {
    facebookLogin(this.successfullLogin)
  }

  registerNewUser() {
    const {email, password} = this.refs;
    asyncRegisterUser(email.value, password.value, this.successfullLogin)
  }

  loginUser() {
    const {email, password} = this.refs;
    classicLogin(email.value, password.value, this.successfullLogin)
  }

}

          // <button onClick={this.loginUser.bind(this)}>Login</button>
          // <button onClick={this.registerNewUser.bind(this)}>Register</button>