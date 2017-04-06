// @flow

import React from "react";
import { asyncRegisterUser, classicLogin, facebookLogin } from '../api/Backendless.js'; 
// import { updateLocationPath } from '../Actions/Actions.js';

export default class LandingPage extends React.Component {


  render() {

    console.log(history.state)
    console.log(this.props.location)

    // if (location !== undefined) {
    //   updateLocationPath(this.props.location.pathname)
    // }

    // const { query } = this.props.location;
    // const { params } = this.props;
    // const { article } = params;
    // const { date, filter } = query;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={ this.onSubmit }>
          <input type="email" placeholder="email" ref="email" required/>
          <input type="password" placeholder="password" ref="password" required/>
          <button onClick={this.loginUser.bind(this)}>Login</button>
          <button onClick={this.registerNewUser.bind(this)}>Register</button>
          <div>
            <button onClick={this.facebookLogin.bind(this)}>FacebookLogin</button>
          </div>
        </form>
      </div>
    );
  }

  onSubmit (e) {
    e.preventDefault();

    // history.pushState({state: 1}, "profile", "/profile");
    // location.reload();
    // if (this.state.typeOfSubmit === 'oneOfThem') {
    // doe something
    // }
  }

  facebookLogin() {
    facebookLogin()
  }

  registerNewUser() {
    const {email, password} = this.refs;
  
    function handleError(result) {
       alert( "error - " + result.message );
    }

    console.log(email.value, password.value)

    asyncRegisterUser(email.value, password.value, handleError())
  }

  loginUser() {
    const {email, password} = this.refs;
    classicLogin(email.value, password.value)
  }

}

          // <button onClick={this.loginUser.bind(this)}>Login</button>
          // <button onClick={this.registerNewUser.bind(this)}>Register</button>