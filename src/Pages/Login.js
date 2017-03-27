// @flow

import React from "react";
import { asyncRegisterUser, classicLogin } from '../api/Backendless.js';

import {browserHistory} from 'react-router-dom';

export default class LandingPage extends React.Component {


  render() {


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

  registerNewUser() {
    const {email, password} = this.refs;
  
    function handleError(result) {
       alert( "error - " + result.message );
    }

    console.log(email.value, password.value)

    asyncRegisterUser(email.value, password.value)
  }

  loginUser() {
    const {email, password} = this.refs;
    classicLogin(email.value, password.value)
  }

}

          // <button onClick={this.loginUser.bind(this)}>Login</button>
          // <button onClick={this.registerNewUser.bind(this)}>Register</button>