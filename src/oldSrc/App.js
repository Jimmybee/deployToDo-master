import React, { Component } from 'react';
import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


// import { getProjects } from './api/api.js';
// import { registerUser } from './api/Backendless.js';
// import { createComment } from './api/Backendless.js';
// import { asyncRegisterUser } from './api/Backendless.js';
import { asyncCreate } from './api/Backendless.js';


class App extends Component {
  componentWillMount() {
    asyncCreate()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.props.children}
      </div>
    );
  }
}

export default App;
