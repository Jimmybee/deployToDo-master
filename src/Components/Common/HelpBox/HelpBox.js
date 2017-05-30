import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class FadeImage extends Component {

  render() {
    var { text } = this.props;
    return (
      <div className="HelpBox">
      	<div className="Aligner">
      	  <img ref="HelpBulb" src={require('../../../images/HelpBulb.svg')} />
      	  <p>{text}</p>
      	</div>
      </div>
    );
  }
}

