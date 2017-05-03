// @flow

// import './Modal.css';
import "./modalLogin.css"


import React from "react";
import { Modal, Button } from 'react-bootstrap'

import { updateUser } from '../../Actions/Actions';
import { asyncRegisterUser, classicLogin, facebookLogin } from '../../api/Backendless.js'; 


export default class ModalLogin extends React.Component {
  constructor(props) {
      super(props);
      this.successfullLogin = this.successfullLogin.bind(this);
  }

  render() {

    const { openState, onHide }  = this.props;

    return (
     <Modal show={openState} onHide={onHide}>
        <Modal.Header closeButton>
           <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body className="Login">
           <form onSubmit={ this.onSubmit.bind(this) }>
             <div className="FacebookLoginBtn">
             <button className="" onClick={this.facebookLogin.bind(this)}>
                <img src={require('../../images/ConnectWithFacebook.png')} alt="facebook login"  className="pull-right"/>
            </button>
          </div>
          <h3 className="Rule"><span>or</span></h3>
          <div className="EmailSignup">
            <input type="email" placeholder="email" ref="email" required className="form-control"/>
            <input type="password" placeholder="password" ref="password" required className="form-control"/>
            <div className="EmailLoginButton">
             <button onClick={this.loginUser.bind(this)}>Login</button>
            </div>
            <div className="EmailLoginButton">
              <button onClick={this.registerNewUser.bind(this)}>Register</button>
            </div>
            <div className="spacer" style={{clear: "both"}}></div>
          </div>
            </form>
        </Modal.Body>
    </Modal>
    );
  }

   onSubmit(e) {
    e.preventDefault();
  }

  successfullLogin( user ) {
    updateUser(user)
    // this.props.history.push("/create")
    const { onHide }  = this.props;
    onHide()
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

